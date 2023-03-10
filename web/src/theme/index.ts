import type { Styles } from '@chakra-ui/theme-tools';

import { extendTheme } from '@chakra-ui/react';
import { Poppins } from '@next/font/google';

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const fonts = {
  heading: poppins.style.fontFamily,
  body: poppins.style.fontFamily,
};

export const colors = {
  primary: '#FF005C',
  chat: '#424549',
  input: '#36393e',
  sidebar: '#282b30',
  background: '#1e2124',
};

export const styles: Styles = {
  global: {
    '*:focus': {
      boxShadow: 'none !important',
    },
    'html': {
      scrollBehavior: 'smooth',
      overflowX: 'hidden',
      bgColor: 'background',
    },
    'a': {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

export const theme = extendTheme({
  config,
  fonts,
  colors,
  styles,
});
