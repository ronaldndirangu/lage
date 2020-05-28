import * as backfill from "backfill/lib/api";
import { PackageInfo } from "workspace-tools";
import path from "path";
import { RunContext } from "../types/RunContext";
import { getCacheConfig } from "./cacheConfig";
import log from "npmlog";
import { getTaskId } from "../task/taskId";

const hashes: { [key: string]: string } = {};
const cacheHits: { [key: string]: boolean } = {};

const taskHashes: { [key: string]: string } = {};
const taskCacheHits: { [key: string]: boolean } = {};

export async function computeHash(info: PackageInfo, context: RunContext) {
  const packagePath = path.dirname(info.packageJsonPath);
  const cacheConfig = getCacheConfig(packagePath, context);

  const logger = backfill.makeLogger("error", process.stdout, process.stderr);
  const name = info.name;

  logger.setName(name);

  try {
    const hash = await backfill.computeHash(
      packagePath,
      logger,
      context.command.join(" ") + context.args.join(" "),
      cacheConfig
    );

    hashes[info.name] = hash;
  } catch (e) {
    log.error(`${info.name} computeHash`, e);
  }
}

export async function fetchBackfill(info: PackageInfo, context: RunContext) {
  const packagePath = path.dirname(info.packageJsonPath);
  const cacheConfig = getCacheConfig(packagePath, context);
  const logger = backfill.makeLogger("error", process.stdout, process.stderr);
  const hash = hashes[info.name];

  try {
    const cacheHit = await backfill.fetch(
      packagePath,
      hash,
      logger,
      cacheConfig
    );
    cacheHits[info.name] = cacheHit;
  } catch (e) {
    log.error(`${info.name} fetchBackfill`, e);
  }
}

export async function putBackfill(info: PackageInfo, context: RunContext) {
  const packagePath = path.dirname(info.packageJsonPath);
  const cacheConfig = getCacheConfig(packagePath, context);
  const logger = backfill.makeLogger("warn", process.stdout, process.stderr);
  const hash = hashes[info.name];

  try {
    await backfill.put(packagePath, hash, logger, cacheConfig);
  } catch (e) {
    // sometimes outputGlob don't match any files, so skipping this
  }
}

export async function computeTaskHash(
  info: PackageInfo,
  task: string,
  context: RunContext
) {
  const packagePath = path.dirname(info.packageJsonPath);
  const cacheConfig = getCacheConfig(packagePath, context);

  const logger = backfill.makeLogger("error", process.stdout, process.stderr);
  const name = info.name;

  logger.setName(name);

  try {
    const hash = await backfill.computeHash(
      packagePath,
      logger,
      task + context.args.join(" "),
      cacheConfig
    );

    console.log(task, context.args, hash);

    taskHashes[getTaskId(info.name, task)] = hash;
  } catch (e) {
    log.error(`${info.name} computeHash`, e);
  }
}

export async function fetchTaskCache(
  info: PackageInfo,
  task: string,
  context: RunContext
) {
  const packagePath = path.dirname(info.packageJsonPath);
  const cacheConfig = getCacheConfig(packagePath, context);
  const logger = backfill.makeLogger("error", process.stdout, process.stderr);
  const hash = taskHashes[getTaskId(info.name, task)];

  try {
    const hit = await backfill.fetch(packagePath, hash, logger, cacheConfig);
    console.log("fetch: ", task, hash, hit);
    return hit;
  } catch (e) {
    log.error(`${info.name} fetchBackfill`, e);
  }
}

export async function putTaskCache(
  info: PackageInfo,
  task: string,
  context: RunContext
) {
  const packagePath = path.dirname(info.packageJsonPath);
  const cacheConfig = getCacheConfig(packagePath, context);
  const logger = backfill.makeLogger("warn", process.stdout, process.stderr);
  const hash = taskHashes[getTaskId(info.name, task)];

  try {
    await backfill.put(packagePath, hash, logger, cacheConfig);
    console.log("put: ", hash);
  } catch (e) {
    // sometimes outputGlob don't match any files, so skipping this
  }
}

export { cacheHits, taskCacheHits };
