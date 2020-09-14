import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import chalk from 'chalk';

import { routes } from './routes';
import { setupWebsocket } from './websocket';

const app = express().disable('x-powered-by');
const server = new http.Server(app);

setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.use(
  morgan(
    `${chalk.bgYellow('[WARN]')} ${chalk.yellow('[HTTP]')} ${chalk.yellow(
      ':method :url - IP :remote-addr - Code :status - Size :res[content-length] B - Handled in :response-time ms',
    )}`,
  ),
);

export { server };
