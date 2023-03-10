import { Flex, Input, Button } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { darken } from 'polished';
import { useContext, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AuthContext } from '@/contexts/AuthContext';
import { colors } from '@/theme';

interface FormData {
  username: string;
}

const schema = z.object({
  username: z.string({ required_error: 'Este campo é obrigatório!' }),
});

export default function LoginPage(): JSX.Element {
  const { authenticate } = useContext(AuthContext);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = useCallback(async (data: FormData) => {
    await authenticate(data.username);

    form.reset();
  }, []);

  return (
    <Flex
      as="main"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bgColor="background"
    >
      <Flex
        as="form"
        flexDir="column"
        gap={4}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Input
          width="250px"
          h="45px"
          bgColor="input"
          color="white"
          border="none"
          _placeholder={{ color: 'gray.400' }}
          {...form.register('username', { required: true })}
        />

        <Button
          type="submit"
          width="250px"
          color="white"
          bgColor="primary"
          _hover={{ bgColor: darken(0.05, colors.primary) }}
          _active={{ bgColor: darken(0.1, colors.primary) }}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
