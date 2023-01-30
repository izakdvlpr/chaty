import http from 'http';

import cors from 'cors';
import express from 'express';
import { Server as WebsocketServer } from 'socket.io';

import { userRoutes, roomRoutes } from './routes';

export interface Connection {
  socketId: string;
  userId: string;
  roomId: string;
}

const app = express();
const server = http.createServer(app);

const io = new WebsocketServer(server, {
  cors: {
    origin: '*',
  },
});

const connections: Record<string, Connection> = {};

io.on('connection', socket => {
  const { userId, roomId } = socket.handshake.query as Record<
    'userId' | 'roomId',
    string
  >;

  if (!userId || !roomId) return;

  const socketId = socket.id;

  connections[userId] = {
    socketId,
    userId,
    roomId,
  };

  console.log(`Client connected: ${socketId}`);
});

app.use(express.json());
app.use(cors());

app.use((req, _res, next) => {
  req.io = io;
  req.connections = connections;

  return next();
});

app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);

server.listen(3333, () => console.log('Api running.'));
