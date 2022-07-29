import { LogSeverity } from "./severity";

export interface Logger {
  log(severity: LogSeverity, message: string, meta?: unknown): void;
  error(message: string, meta?: unknown): void;
  warn(message: string, meta?: unknown): void;
  info(message: string, meta?: unknown): void;
  debug(message: string, meta?: unknown): void;
  verbose(message: string, meta?: unknown): void;
}
