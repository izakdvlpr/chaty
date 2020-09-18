import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Button, ButtonText } from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <Logo>Drocsid</Logo>

      {!!localStorage.getItem('token') ? (
        <Link to="/@me">
          <Button>
            <ButtonText>Abrir Drocsid</ButtonText>
          </Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default HeaderComponent;
