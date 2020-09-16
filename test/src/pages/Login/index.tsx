import { SubmitHandler, FormHandles } from '@unform/core';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';


import ChatAPI from '@api/Chat';
import History from '@services/history';

import WaveImg from '@assets/svg/wave.svg';
import Button from '@components/Button';
import Input from '@components/Input';

import { Container, Header, Block, Contents, Wave } from './styles';

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
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

      await ChatAPI.userAuth(data).then(response => {
        const { token } = response.data;

        localStorage.setItem('token', token);
      });

      formRef.current?.setErrors({});

      History.push('/');

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

      console.log(err.response?.data);
    }
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit} className="form">
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
            // containers={[
            //   { text: 'Esqueceu a senha?', link: '/changepassword' },
            // ]}
          />

          <Button type="submit">Entrar</Button>

          <Contents>
            Precisando de uma conta? <Link to="/register">Registre-se</Link>
          </Contents>
        </Block>
      </Form>

      <Wave src={WaveImg} alt="wave" />
    </Container>
  );
};

export default LoginPage;
