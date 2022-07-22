import express, { Express } from 'express';
import { App } from '../app';
import { Logger } from '../logging/logger';
import { Route } from './route';

export default class ExpressApp implements App {
  private app: Express;

  constructor(private logger: Logger) {
    this.app = express();
  }

  addRoute(route: Route) {
    this.app.use(route.createRoute());
  }

  start(): void {
    const server = this.app;
    server.listen(() => {
      this.logger.info('Server listening now...');
    });
  }
}
