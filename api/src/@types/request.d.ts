import type { Server as WebsocketServer } from 'socket.io';

import type { Connection } from '@/server';

interface MyRequest {
  io: WebsocketServer;
  connections: Record<string, Connection>;
}

declare module 'express' {
  interface Request extends MyRequest {}
}

declare module '@types/express-serve-static-core' {
  interface Request extends MyRequest {}
}

declare module '@types/express-serve-static-core' {
  interface Request extends MyRequest {}
}
