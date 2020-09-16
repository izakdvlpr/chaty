import 'reflect-metadata';

import { config } from 'dotenv';

import { loggerUtils } from '@utils/loggerUtils';

import { server } from './app';

if (process.env && process.env.NODE_ENV)
  config({ path: `../.env.${process.env.NODE_ENV}` });
else config({ path: '../.env.development' });

server.listen(process.env.PORT, () => {
  loggerUtils.log(`Server started, port ${process.env.PORT}`, {
    tags: ['HTTP'],
  });
});
