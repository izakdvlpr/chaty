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
} from '@styles/pages/register';

const RegisterPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>Criar uma conta</Header>

        <Block>
          <Input label="E-mail" type="email" />
          <Input label="Nome de Usuário" type="text" />
          <Input label="Senha" type="password" />

          <Button type="submit">Continuar</Button>

          <Contents>
            <Link href="/login">
              <a>Já tem uma conta?</a>
            </Link>                      
          </Contents>
        </Block>
      </Form>
      
      <Wave src="/static/images/wave.svg" alt="wave" />
    </Container>
  );
};

export default RegisterPage;
