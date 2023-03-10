import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '@/contexts/AuthContext';
import { theme } from '@/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
