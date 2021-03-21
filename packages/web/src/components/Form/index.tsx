import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Header,
  Main,
  FormWrapper,
  Label,
  Input,
  Button,
} from './styles';

export function Form() {
  const router = useRouter();

  const [username, setUsername] = useState('');

  function handleAuthenticatingTheUser(event: FormEvent) {
    event.preventDefault();
      
    router.push('/room');
  }

  return (
    <Container>
      <Header>
        <p>
          Cha<strong>Ty</strong>
        </p>
      </Header>

      <Main>
        <FormWrapper onSubmit={handleAuthenticatingTheUser}>
          <Label>Usuário</Label>

          <Input
            type="text"
            placeholder="Insira um nome de usuário..."
            value={username}
            onChange={event => setUsername(event.target.value)}
          />

          <Button type="submit">Entrar no chat</Button>
        </FormWrapper>
      </Main>
    </Container>
  );
}
