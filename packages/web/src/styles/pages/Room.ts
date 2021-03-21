import styled from 'styled-components';

// HD - Header
// RL - Room List
// RD - Room Data

export const Container = styled.main`
  height: 100vh;

  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: 70px auto 70px;
  grid-template-areas:
    'HD HD HD HD'
    'RL RD RD RD'
    'RL RD RD RD';

  transition: 600ms ease;

  @media (max-width: 720px) {
    grid-template-columns: 70px auto;
    grid-template-rows: 70px auto 70px;
  }
`;
