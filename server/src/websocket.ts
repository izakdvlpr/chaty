import http from 'http';
import socket from 'socket.io';

import { loggerUtils } from './utils/loggerUtils';

function setupWebsocket(server: http.Server) {
  const io = socket(server);

  io.on('connection', socket => {
    loggerUtils.log('Server has a new connection', {
      tags: ['IO', 'Connection'],
    });

    socket.on('chat.message', data => {
      console.log('[SOCKET] Chat.message => ', data);

      io.emit('chat.message', data);
    });

    socket.on('disconnect', () => {
      loggerUtils.log('A connection was disconnected', {
        tags: ['SOCKET', 'Disconnect'],
      });
    });
  });
}

export { setupWebsocket };
