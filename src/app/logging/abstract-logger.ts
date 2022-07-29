import { Logger } from './logger';
import { LogSeverity } from './severity';

export abstract class AbstractLogger implements Logger {
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
    const timestamp = new Date().toISOString();

    this.__log(`${timestamp}: [${severity.toUpperCase()}] - ${message}`);
  }

  protected abstract __log(message: string, meta?: unknown): void;
}