import { io } from 'socket.io-client';

const socket = io('ws://localhost:3333', {
  query: {
    userId: 'izak',
  },
});

socket.on('users', users => console.log(users));
