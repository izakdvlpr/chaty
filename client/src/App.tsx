import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import colors from './styles/colors';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />

      <Routes />
    </ThemeProvider>
  );
}

export default App;
