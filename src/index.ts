import ExpressApp from './core/express/express-app';
import { ConsoleLogger } from './core/console-logger';

const defaultLogger = new ConsoleLogger();

const app = new ExpressApp(defaultLogger);
app.start();
