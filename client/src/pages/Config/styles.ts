import { MdSettings } from 'react-icons/md';
import styled from 'styled-components';

export const Grid = styled.div`
  height: 100vh;

  display: grid;

  grid-template-columns: 240px auto 240px;
  grid-template-rows: 52px auto 52px;
  grid-template-areas:
    'CL CI CI'
    'CL NL NL'
    'UI NL NL';
`;

export const SettingsIcon = styled(MdSettings)`
  width: 24px;
  height: 24px;

  margin-right: 10px;

  fill: ${({ theme }) => theme.text};
`;
