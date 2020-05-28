import { TaskId } from "../types/Task";
import { PackageInfo } from "workspace-tools";
import { getPackageTaskFromId } from "./taskId";
import { RunContext } from "../types/RunContext";
import {
  cacheHits,
  computeTaskHash,
  fetchTaskCache,
  putTaskCache,
} from "../cache/backfill";
import { info } from "../logger";
import { isCacheTask } from "../cache/cacheTasks";
import { formatDuration } from "../logger/formatDuration";

export async function taskWrapper(
  taskId: TaskId,
  fn: (info: PackageInfo, context: RunContext) => Promise<void>,
  context: RunContext
) {
  const { allPackages, profiler, measures, queue } = context;

  const [pkg, task] = getPackageTaskFromId(taskId);

  const start = process.hrtime();

  await computeTaskHash(allPackages[pkg], task, context);
  const cacheHit = await fetchTaskCache(allPackages[pkg], task, context);

  if (!cacheHit) {
    try {
      info(taskId, `started`);
      await profiler.run(() => fn(allPackages[pkg], context), taskId);
      const duration = process.hrtime(start);
      if (!isCacheTask(task)) {
        measures.taskStats.push({ taskId, start, duration, status: "success" });
        info(taskId, `done - took ${formatDuration(duration)}`);
      }
      await putTaskCache(allPackages[pkg], task, context);
    } catch (e) {
      const duration = process.hrtime(start);
      measures.taskStats.push({ taskId, start, duration, status: "failed" });
      throw e;
    }
  } else if (!isCacheTask(task)) {
    const duration = process.hrtime(start);
    measures.taskStats.push({ taskId, start, duration, status: "skipped" });
    info(taskId, "skipped");
  }
}
