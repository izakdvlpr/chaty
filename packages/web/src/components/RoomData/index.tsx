import { FormEvent, useState, useEffect, useRef } from 'react';

import { useChat } from '@hooks/useChat';

import { RoomMessage } from '@components/RoomMessage';

import { Container, Messages, Form, Input, Button, SendIcon } from './styles';

export function RoomData() {
  const messagesRef = useRef(null);
   
  const { getMessages, sendMessage } = useChat();

  const [message, setMessage] = useState('');

  function handleSendToMessages(event: FormEvent) {
    event.preventDefault();

    setMessage('');
    sendMessage('zevdvlpr', message);
  }    

  useEffect(() => {
    if (messagesRef) {
      messagesRef.current.addEventListener(
        'DOMNodeInserted',
        ({ currentTarget }) => {
          currentTarget.scroll({
            top: currentTarget.scrollHeight,
            behavior: 'smooth',
          });
        },
      );
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {getMessages.data?.messages.map((message, index) => (
          <RoomMessage
            key={index}
            user={message.user}
            date={new Date()}
            content={message.content}
          />
        ))}
      </Messages>

      <Form onSubmit={handleSendToMessages}>
        <Input
          type="text"
          placeholder="Envie uma mensagem..."
          value={message}
          onChange={event => setMessage(event.target.value)}
        />

        <Button type="submit">
          <SendIcon /> Enviar
        </Button>
      </Form>
    </Container>
  );
}
