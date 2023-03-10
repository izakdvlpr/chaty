import { Flex, IconButton, Icon, Input } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { PaperPlaneRight } from 'phosphor-react';
import { darken } from 'polished';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { api } from '@/services/api';
import { colors } from '@/theme';

interface MessageDataProps {
  roomId: string;
  roomName: string;
  userId: string;
}

interface FormData {
  content: string;
}

const schema = z.object({
  content: z.string({ required_error: 'Este campo é obrigatório!' }),
});

export function MessageData({
  roomId,
  roomName,
  userId,
}: MessageDataProps): JSX.Element {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmitMessage = useCallback(
    async (data: FormData) => {
      await api.post(`/rooms/${roomId}/messages`, {
        content: data.content,
        authorId: userId,
      });

      form.reset();
    },
    [roomId, userId],
  );

  return (
    <Flex
      as="form"
      w="100%"
      h="80px"
      align="center"
      p={4}
      gap={4}
      onSubmit={form.handleSubmit(handleSubmitMessage)}
    >
      <Input
        h="50px"
        placeholder={`Conversar em #${roomName}`}
        bgColor="input"
        color="white"
        border="none"
        _placeholder={{ color: 'gray.400' }}
        {...form.register('content', { required: true })}
      />

      <IconButton
        size="lg"
        aria-label="Enviar mensagem"
        bgColor="primary"
        icon={<Icon as={PaperPlaneRight} color="white" weight="fill" />}
        _hover={{ bgColor: darken(0.05, colors.primary) }}
        _active={{ bgColor: darken(0.1, colors.primary) }}
      />
    </Flex>
  );
}
