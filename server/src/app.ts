import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';

import { router } from './routes';
import { setupWebsocket } from './websocket';

import './database/connect';

const app = express().disable('x-powered-by').enable('trust proxy');
const server = new http.Server(app);

setupWebsocket(server);

app.use(cors());
app.use(
  morgan(
    `${chalk.bgYellow('[WARN]')} ${chalk.yellow('[HTTP]')} ${chalk.yellow(
      ':method :url - IP :remote-addr - Code :status - Size :res[content-length] B - Handled in :response-time ms',
    )}`,
  ),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export { server };
