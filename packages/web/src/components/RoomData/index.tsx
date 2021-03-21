import { FormEvent, useState, useEffect, useRef } from 'react';

import { useChat } from '@hooks/useChat';

import { RoomMessage } from '@components/RoomMessage';

import { Container, Messages, Form, Input, Button, SendIcon } from './styles';

export function RoomData() {
  const messagesRef = useRef(null);

  const { previousMessages, receivedMessages, sendMessage } = useChat();  

  const [content, setContent] = useState('');

  function handleSendToMessages(e: FormEvent) {
    e.preventDefault();

    if (content.trim() === '') return;

    setContent('');

    sendMessage('zevdvlpr', content);
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
        {receivedMessages.loading
          ? previousMessages.data?.previousMessages.map(
              ({ user, content }, index) => (
                <RoomMessage
                  key={index}
                  user={user}
                  date={new Date()}
                  content={content}
                />
              ),
            )
          : receivedMessages.data?.receivedMessages.map(
              ({ user, content }, index) => (
                <RoomMessage
                  key={index}
                  user={user}
                  date={new Date()}
                  content={content}
                />
              ),
            )}
      </Messages>

      <Form onSubmit={handleSendToMessages}>
        <Input
          type="text"
          placeholder="Envie uma mensagem..."
          value={content}
          onChange={event => setContent(event.target.value)}
        />

        <Button type="submit">
          <SendIcon /> Enviar
        </Button>
      </Form>
    </Container>
  );
}
