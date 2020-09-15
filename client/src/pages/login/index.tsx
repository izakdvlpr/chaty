import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Link from 'next/link';

import Input from '@components/Input';
import Button from '@components/Button';

import ChatAPI from '@api/Chat';

import {
  Container,
  Form,
  Header,
  Block,
  Contents,
  Wave,
} from '@styles/pages/login';

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('Este campo é obrigatiório'),
        password: Yup.string().required('Este campo é obrigatiório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});
      
      router.push('/app');

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages: {
          [error: string]: string;
        } = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <h1>Boas-vindas de volta!</h1>
          <p>Estamos muito animados em te ver novamente!</p>
        </Header>

        <Block>
          <Input name="email" label="E-mail" />
          <Input
            name="password"
            type="password"
            label="Senha"
            containers={[
              { text: 'Esqueceu a senha?', link: '/' },
              { text: 'Esqueceu a senha?', link: '/' }
            ]}
          />

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
