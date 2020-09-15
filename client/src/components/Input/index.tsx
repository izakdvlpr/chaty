import React from 'react';

import { Container, Label, Input, InputWrapper } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputComponent: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>

      <InputWrapper>
        <Input {...props} />
      </InputWrapper>
    </Container>
  );
};

export default InputComponent;
