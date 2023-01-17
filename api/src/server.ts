import http from 'http';

import { Server } from 'socket.io';

import { ConnectionRepository } from '@/database/repositories';

import { app } from './app';

const server = http.createServer(app);

const connectionRepository = new ConnectionRepository();

export const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  const { userId } = socket.handshake.query as Record<'userId', string>;

  if (!userId) return;

  const socketId = socket.id;

  connectionRepository.create({ userId, socketId });

  console.log(`Client connected: ${userId}-${socketId}`);
});

server.listen(3333, () => console.log('Api running.'));
