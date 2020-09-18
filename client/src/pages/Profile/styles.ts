import styled from 'styled-components';

/**
 * SU = Search User
 * SC = Select Channel
 * UI = User Info
 * CH = Chat
 * UL = User List
 */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 240px auto 240px;
  grid-template-rows: 52px auto 52px;
  grid-template-areas:
    "SU CH UL"
    "SC CH UL"
    "UI CH UL";
  height: 100vh;
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
