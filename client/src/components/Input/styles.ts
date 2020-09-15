import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.inputText};

  &.error,
  i {
    color: ${({ theme }) => theme.error};
  }

  > i {
    font-size: 11px;
    font-weight: 400;
    text-transform: none;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 8px;

  display: flex;
  flex-direction: column;

  > input {
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

    &.error {
      color: #dcddde;

      border: ${({ theme }) => `1px solid ${theme.error}`};
    }
  }
`;

export const Containers = styled.div`
  margin-top: 8px;

  > a {
    font-size: 14px;
    color: ${({ theme }) => theme.primary};

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
