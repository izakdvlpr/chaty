import React from 'react';
import Link from 'next/link';

import { Container, Logo, Button, ButtonText } from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <Logo>Drocsid</Logo>
      
      <Link href="/login">
        <a>
          <Button>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </a>
      </Link>
    </Container>
  );
};

export default HeaderComponent;
