import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    input: string;
    inputText: string;
    
    text: string;
    
    dnd: string;
    online: string;
    idle: string;
    offline: string;

    background: string;

    white: string;
    black: string;

    success: string;
    error: string;
  }
}
