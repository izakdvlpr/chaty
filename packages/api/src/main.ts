import 'dotenv/config';
import 'reflect-metadata';

import { eachSeries } from 'async';

import { Database } from '@config/database';
import { Server } from '@config/server';

const server = new Server();
const database = new Database();

const iterableCollection = [() => server.connect(), () => database.connect()];

async function main(): Promise<void> {
  await eachSeries(iterableCollection, async run => run());
}

main();
