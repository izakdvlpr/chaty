import 'dotenv/config';
import 'reflect-metadata';

import { server } from './app';
import { loggerUtils } from './utils/loggerUtils';

const { HOST, PORT } = process.env;

server.listen(PORT, () => {
  loggerUtils.log(`Server started at http://${HOST}:${PORT}`, {
    tags: ['HTTP'],
  });
});
