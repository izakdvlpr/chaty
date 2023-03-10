import type { Message } from '@/interfaces/api';

import { io, ManagerOptions, SocketOptions, Socket } from 'socket.io-client';

interface ServerToClientEvents {
  messageCreate: (message: Message) => void;
}

type ClientToServerEvents = any;

export function getSocket(
  options: Partial<ManagerOptions & SocketOptions>,
): Socket<ServerToClientEvents, ClientToServerEvents> {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    process.env.NEXT_PUBLIC_WS_URL,
    options,
  );

  return socket;
}
