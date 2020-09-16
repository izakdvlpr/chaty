import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Button, ButtonText } from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <Logo>Drocsid</Logo>

      <Link to="/login">
        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Link>
    </Container>
  );
};

export default HeaderComponent;
