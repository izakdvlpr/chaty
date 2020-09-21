import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  padding: 8px;

  background-color: ${({ theme }) => shade(0.1, theme.background)};
`;
