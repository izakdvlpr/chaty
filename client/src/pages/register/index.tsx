import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Link from 'next/link';

import ChatAPI from '@api/Chat';

import Input from '@components/Input';
import Button from '@components/Button';

import {
  Container,
  Form,
  Header,
  Block,
  Contents,
  Wave,
} from '@styles/pages/register';

interface FormData {
  email: string;
  name: string;
  password: string;
}

const RegisterPage = () => {
  const router = useRouter();
  
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('Este campo é obrigatiório'),
        name: Yup.string().required('Este campo é obrigatiório'),
        password: Yup.string()
          .min(8, 'A senha deve ter no minimo 8 caracteres')
          .required('Este campo é obrigatiório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await ChatAPI.createUser(data);      
      
      formRef.current?.setErrors({});
      
      router.push('/');
      
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
      } else if (err.response?.data.message === 'E-mail already registered') {
        formRef.current?.setErrors({});        
        formRef.current?.setFieldError('email', 'Este e-mail já está em uso');
      } else if (err.response?.data.message === 'Name already registered') {
        formRef.current?.setErrors({});
        formRef.current?.setFieldError('name', 'Nome já cadastrado');
      }
      
      console.log(`[${err.response?.status}]`, err.response?.data.message)
    }
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>Criar uma conta</Header>

        <Block>
          <Input name="email" label="E-mail" />
          <Input name="name" label="Nome de Usuário" />
          <Input name="password" type="password" label="Senha" />

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
