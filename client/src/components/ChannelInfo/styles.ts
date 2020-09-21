import styled from 'styled-components';
import { rgba, lighten } from 'polished';


export const Container = styled.div`
  grid-area: CI;

  padding: 0 20px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);

  background-color: ${({ theme }) => theme.background};
`;

export const ChannelName = styled.div`
  font-size: 16px;
  font-weight: 700;

  color: ${({ theme }) => theme.white};
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  
  margin: 0 13px;
  
  opacity: 0.2;
  background-color: ${({ theme }) => theme.white};
`;

export const Section = styled.div`
  margin-right: 8px;
  padding: 6px;  

  font-size: 15.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  
  border-radius: 4px;
  
  cursor: pointer;
  
  &:hover,
  &.active {
    color: ${({ theme }) => lighten(0.2, theme.text)};

    background-color: ${({ theme }) => lighten(0.020, theme.background)};
  }
  
  &.button {
    color: ${({ theme }) => theme.online};
    background-color: ${({ theme }) => rgba(theme.online, 0.2)};
    
    &.active {
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => lighten(0.040, theme.online)};
    }
  }
`;
