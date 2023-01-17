/* eslint-disable  */

const { io } = require('socket.io-client');

const socket = io('ws://localhost:3333', {
  query: {
    userId: 'a100c37d-9cde-4aa5-b383-c3280d0b6663',
    guildId: '22ed4565-f2ca-4766-acb1-7abaa192549f',
    channelId: '1edeb3ea-43d8-437a-a2fd-bf5616ae3d7d',
  },
});

socket.on('messageCreate', message => {
  console.log(`[${message.author.username}]: ${message.content}`);
});
