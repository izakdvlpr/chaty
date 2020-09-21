import styled from 'styled-components';

export const Grid = styled.div`
  height: 100vh;

  display: grid;

  grid-template-columns: 240px auto 240px;
  grid-template-rows: 52px auto 52px;
  grid-template-areas:
    'CL CD UL'
    'CL CD UL'
    'UI CD UL';
`;
