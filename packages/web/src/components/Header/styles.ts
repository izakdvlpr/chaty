import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  grid-area: HD;

  padding: 0 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--blue);

  p {
    font-size: 2rem;
  }

  p,
  strong {
    color: var(--shape);
  }

  button {
    width: 9rem;
    height: 2.5rem;

    font-size: 1rem;
    font-weight: 600;

    color: var(--shape);

    border: 0;
    border-radius: 0.25rem;

    background: ${lighten(0.1, '#228BE6')};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
  
  @media (max-width: 500px) {
    padding: 0 40px;
  }
`;
