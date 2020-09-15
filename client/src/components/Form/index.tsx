import React from 'react';

import { Container } from './styles';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const FormComponent: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default FormComponent;
