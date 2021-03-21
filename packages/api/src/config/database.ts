import mongoose from 'mongoose';

import { LoggerUtils } from '@utils/LoggerUtils';

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

export class Database {
  public connect() {
    mongoose
      .connect(
        `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        },
      )
      .then(() => LoggerUtils.log('Successfully Connected.', { tags: ['DB'] }))
      .catch(err =>
        LoggerUtils.error(`Error connecting: ${err}`, { tags: ['DB'] }),
      );
  }
}
