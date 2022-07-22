import { AbstractLogger } from "./logging/abstract-logger";
import { Logger } from "./logging/logger";
import { LogSeverity } from "./logging/severity";

export class ConsoleLogger extends AbstractLogger {
  protected __log(message: string, meta?: unknown): void {
    console.log(message);
  }
}