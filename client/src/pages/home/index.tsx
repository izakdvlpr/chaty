import React from 'react';
import Link from 'next/link';

import Header from '@components/Header';

import { Container, Content, Button, Wave } from '@styles/pages/home';

const MainPage = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>          
          <h1>Seu lugar para conversar</h1>
          <p>Não importa se você faz parte de um clube escolar, uma comunidade artística mundial ou só amigos querendo ficar de boa, o Drocsid torna mais fácil conversar todo dia e se ver com mais frequência.</p>
          
          <Link href="/">
            <a>
              <Button>Abra o Drocsid no seu navegador</Button>
            </a>
          </Link>
        </Content>
        
        <Wave src="/static/images/wave.svg" alt="wave" />
      </Container>
    </>
  );
};

export default MainPage;
