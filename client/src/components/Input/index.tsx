import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useField } from '@unform/core';

import { Container, Label, InputWrapper, Containers } from './styles';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;

  containers?: {
    text: string;
    link: string;
  }[];
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputComponent: React.FC<InputProps> = ({
  name,
  label,

  containers,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && (
        <Label htmlFor={fieldName} className={error ? 'error' : ''}>
          {label} {error && <i className={error ? 'error' : ''}>- {error}</i>}
        </Label>
      )}

      <InputWrapper>
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          className={error ? 'error' : ''}
          {...rest}
        />

        <Containers>
          {containers &&
            containers.map(content => (
              <Link key={content.text} href={content.link}>
                <a>{content.text}{' '}</a>                
              </Link>            
            ))}
        </Containers>
      </InputWrapper>
    </Container>
  );
};

export default InputComponent;
