// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
