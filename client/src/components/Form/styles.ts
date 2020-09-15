import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.form`
  width: 480px;

  padding: 32px;

  box-shadow: ${({ theme }) => `0 2px 10px 0 ${rgba(theme.black, 0.1)}`};
  border-radius: 5px;

  background-color: ${({ theme }) => theme.input};
`;