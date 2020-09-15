import React from 'react';
import Link from 'next/link';

import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';

import {
  Container,  
  Header,
  Block,
  Contents,
  Wave,
} from '@styles/pages/login';

const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h1>Boas-vindas de volta!</h1>
          <p>Estamos muito animados em te ver novamente!</p>
        </Header>

        <Block>
          <Input label="E-mail" type="email" />          
          <Input label="Senha" type="password" />

          <Button type="submit">Entrar</Button>

          <Contents>
            Precisando de uma conta?{' '}
            
            <Link href="/register">
              <a>Registre-se</a>
            </Link>                      
          </Contents>
        </Block>
      </Form>
      
      <Wave src="/static/images/wave.svg" alt="wave" />
    </Container>
  );
};

export default LoginPage;
