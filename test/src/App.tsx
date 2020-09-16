import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import history from '@services/history';

import colors from '@styles/colors';
import GlobalStyles from '@styles/global';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Router history={history}>
        <GlobalStyles />

        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
