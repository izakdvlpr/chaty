import styled from 'styled-components';

import { lighten } from 'polished';

export const Message = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 1rem;

  background: ${lighten(0.4, '#228BE6')};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  > span {
    margin-right: 8px;

    font-size: 1rem;
    
    color: var(--blue);
  }
`;

export const Content = styled.div`
  font-weight: 500;
`;
