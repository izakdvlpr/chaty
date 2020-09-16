import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    input: string;
    inputText: string;

    background: string;

    white: string;
    black: string;

    success: string;
    error: string;
  }
}
