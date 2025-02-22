import type { Reporter } from "@lage-run/logger";
import { Logger, LogLevel } from "@lage-run/logger";
import { ReporterInitOptions } from "../types/LoggerOptions";
import { createReporter } from "./createReporter";

export function initializeReporters(logger: Logger, options: ReporterInitOptions) {
  const { reporter, verbose, grouped, logLevel } = options;
  const reporterOptions = Array.isArray(reporter) ? reporter : [reporter];
  for (const reporter of reporterOptions) {
    const reporterInstance = createReporter({
      verbose,
      grouped,
      logLevel: LogLevel[logLevel],
      reporter: reporter as string,
    });
    logger.addReporter(reporterInstance);
  }

  return logger.reporters;
}
