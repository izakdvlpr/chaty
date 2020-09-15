import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Button;
