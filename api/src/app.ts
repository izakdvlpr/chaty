import cors from 'cors';
import express from 'express';

import { userRoutes, guildRoutes } from './routes';

export const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use(cors());

app.use('/users', userRoutes);
app.use('/guilds', guildRoutes);
