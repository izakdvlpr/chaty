import { createConnection } from 'typeorm';

import { loggerUtils } from '../utils/loggerUtils';

createConnection().then(() =>
  loggerUtils.log('Successfully connected with database', {
    tags: ['Database'],
  }),
);
