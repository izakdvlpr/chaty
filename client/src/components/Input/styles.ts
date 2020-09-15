import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.h5`
  margin-bottom: 8px;

  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.inputText};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;

  height: 40px;
  width: 100%;

  font-size: 13px;
  font-weight: 400;

  color: #dcddde;

  border-radius: 3px;

  border: ${({ theme }) => `1px solid ${rgba(theme.black, 0.3)}`};

  cursor: text;

  background-color: ${({ theme }) => rgba(theme.black, 0.1)};
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.black};
  }
`;
