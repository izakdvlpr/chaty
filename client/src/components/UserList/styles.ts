import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  grid-area: UL;

  padding: 8px;

  background-color: ${({ theme }) => shade(0.1, theme.background)};
`;
