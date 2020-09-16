if (process.env && process.env.NODE_ENV)
  require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
else require('dotenv').config({ path: './.env.development' });

module.exports = {
  type: 'postgres',
  url: process.env.DB_URL,
  entities: ['src/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
