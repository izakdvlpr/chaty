import { Flex, Text } from '@chakra-ui/react';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from 'react';

import { Message, GetMessagesFromRoomResponse } from '@/interfaces/api';
import { api } from '@/services/api';
import { getSocket } from '@/services/socket';
import { colors } from '@/theme';

interface MessageListProps {
  roomId: string;
  userId: string;
}

export function MessageList({ roomId, userId }: MessageListProps): JSX.Element {
  const socket = getSocket({
    query: {
      roomId,
      userId,
    },
  });

  const [messages, updateMessages] = useState<Message[]>([]);

  const bottomRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleGetMessages = useCallback(async () => {
    if (!roomId || !userId) return;

    const { data } = await api.get<GetMessagesFromRoomResponse>(
      `rooms/${roomId}/messages`,
    );

    updateMessages(data.messages);
  }, [roomId, userId]);

  const handleUpdateMessage = useCallback(() => {
    if (!roomId || !userId) return;

    socket.on('messageCreate', newMessage => {
      if (!newMessage) return;

      updateMessages(oldMessages => [...oldMessages, newMessage]);
    });
  }, [roomId, userId]);

  useEffect(() => {
    handleGetMessages();
  }, [handleGetMessages]);

  useEffect(() => {
    handleUpdateMessage();
  }, [handleUpdateMessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Flex
      w="100%"
      h="calc(100% - 80px)"
      gap={4}
      flexDir="column"
      overflowY="scroll"
      sx={{
        '::-webkit-scrollbar': {
          w: '10px',
        },
        '::-webkit-scrollbar-track': {
          boxShadow: `inset 0 0 10px 10px ${colors.chat}`,
          border: 'solid 3px transparent',
        },
        '::-webkit-scrollbar-thumb': {
          boxShadow: `inset 0 0 10px 10px ${colors.primary}`,
          border: 'solid 3px transparent',
        },
      }}
    >
      {messages &&
        messages.map((message, index) => (
          <Flex
            key={message.id}
            w="max-content"
            mt={index === 0 ? 4 : '0px'}
            mx={4}
            p={2}
            borderRadius="md"
            bgColor="chat"
          >
            <Text color="white">{message.content}</Text>
          </Flex>
        ))}

      <Flex ref={bottomRef} />
    </Flex>
  );
}
