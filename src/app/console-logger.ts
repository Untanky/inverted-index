import { AbstractLogger } from './logging/abstract-logger';

export class ConsoleLogger extends AbstractLogger {
  protected __log(message: string, meta?: unknown): void {
    console.log(message);
  }
}