declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: number;
    JWT_SECRET: string;
    DB_URL: string;
  }
}
