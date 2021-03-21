import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #228BE6;     
    --green: #33CC95; 
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --background: #F0F2F5;
    --shape: #FFFFFF;
  }
  
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;
  } 
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }     
    
  body {      
    background: var(--background);
    
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  [disabled] {
    opacity: 0.6;
    
    cursor: not-allowed;
  }  
`;
