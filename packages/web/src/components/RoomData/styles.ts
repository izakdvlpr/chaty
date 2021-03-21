import styled from 'styled-components';

import { MdSend } from 'react-icons/md';

import { transparentize, lighten } from 'polished';

export const Container = styled.div`
  grid-area: RD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--shape);
`;

export const Messages = styled.div`
  max-height: calc(100vh - 150px);

  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  scrollbar-color: ${lighten(0.1, '#228BE6')} var(--background);
  scrollbar-width: 8px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${lighten(0.1, '#228BE6')};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 70px;

  padding: 0 1rem;

  display: flex;
  align-items: center;

  background: ${transparentize(0.7, '#228BE6')};
`;

export const Input = styled.input`
  width: 100%;
  height: 2.25rem;
  
  padding: 0 1rem;
  
  font-size: 1rem;
  font-weight: 500;
  
  color: inherit;

  border: 0;
  border-radius: 0.25rem;
  
  &::placeholder {
    color: var(--blue);
  }
`;

export const Button = styled.button`
  height: 2.25rem;

  padding: 0 1rem;
  margin-left: 1rem;

  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;

  color: var(--blue);

  border: 0;
  border-radius: 0.25rem;

  background: var(--shape);

  &:hover {
    color: var(--shape);

    background: var(--green);

    svg {
      fill: var(--shape);
    }
  }
`;

export const SendIcon = styled(MdSend)`
  margin-right: 8px;

  fill: var(--blue);
`;
