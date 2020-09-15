import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

import { Container } from '@styles/pages/app';

const myId = uuidv4();
const socket = io('http://localhost:3333');

socket.on('connect', () =>
  console.log('[IO] Connect => A new connection has been established'),
);

interface IMessage {
  id: string;
  message: string;
}

const Chat = () => {
  const [message, updateMessage] = useState('');
  const [messages, updateMessages] = useState<IMessage[]>([]);

  const sendMessage = () => {
    const handleNewMessage = (newMessage: IMessage) =>
      updateMessages([...messages, newMessage]);

    socket.on('chat.message', handleNewMessage);

    return () => socket.off('chat.message', handleNewMessage);
  };

  useEffect(() => {
    sendMessage();
  }, [messages]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (message.trim()) {
      socket.emit('chat.message', {
        id: myId,
        message,
      });

      updateMessage('');
    }
  };

  return (
    <Container>
      <ul className="list">
        {messages.map((m, index) => (
          <li
            className={`list__item list__item--${
              m.id === myId ? 'mine' : 'other'
            }`}
            key={index}
          >
            <span
              className={`message message--${m.id === myId ? 'mine' : 'other'}`}
            >
              {m.message}
            </span>
          </li>
        ))}
      </ul>

      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="form__field"
          onChange={e => updateMessage(e.target.value)}
          placeholder="Type a new message here"
          type="text"
          value={message}
        />
      </form>
    </Container>
  );
};

export default Chat;
