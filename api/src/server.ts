import http from 'http';

import { Server } from 'socket.io';

import { app } from '@/app';
import { ConnectionRepository } from '@/database/repositories';
import { Logger } from '@/utils/logger';

const server = http.createServer(app);

const logger = new Logger({ scope: 'Api' });

const connectionRepository = new ConnectionRepository();

export const websocket = new Server(server, {
  cors: {
    origin: '*',
  },
});

websocket.on('connection', socket => {
  const { userId, guildId, channelId } = socket.handshake.query as Record<
    'userId' | 'guildId' | 'channelId',
    string
  >;

  if (!userId || !guildId || !channelId) return;

  const socketId = socket.id;

  connectionRepository.create({
    userId,
    guildId,
    channelId,
    socketId,
  });

  logger.info(`Client connected: ${userId}-${channelId}-${socketId}`);
});

server.listen(3333, () => logger.info('Api running.'));
