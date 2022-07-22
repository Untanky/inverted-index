import { Logger } from "./logging/logger";
import { LogSeverity } from "./logging/severity";

export class ConsoleLogger implements Logger {
  error(message: string, meta?: unknown): void {
    this.log(LogSeverity.ERROR, message, meta);
  }

  warn(message: string, meta?: unknown): void {
    this.log(LogSeverity.WARNING, message, meta);
  }

  info(message: string, meta?: unknown): void {
    this.log(LogSeverity.INFO, message, meta);
  }

  debug(message: string, meta?: unknown): void {
    this.log(LogSeverity.DEBUG, message, meta);
  }

  verbose(message: string, meta?: unknown): void {
    this.log(LogSeverity.VERBOSE, message, meta);
  }

  log(severity: LogSeverity, message: string, meta?: unknown): void {
    console.log(`[${severity.toUpperCase()}] - ${message}`);
  }
}