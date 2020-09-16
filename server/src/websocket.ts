import http from 'http';
import socket from 'socket.io';

import { loggerUtils } from '@utils/loggerUtils';

function setupWebsocket(server: http.Server) {
  const io = socket(server);

  io.on('connection', socket => {
    loggerUtils.log('Server has a new connection', {
      tags: ['SocketConnection'],
    });

    socket.on('chat.message', data => {
      io.emit('chat.message', data);
    });

    socket.on('disconnect', () => {
      loggerUtils.log('A connection was disconnected', {
        tags: ['SocketDisconnect'],
      });
    });
  });
}

export { setupWebsocket };
