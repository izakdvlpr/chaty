import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  grid-area: SU;  
  
  display: flex;
  align-items: center;
  
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  
  background-color: ${({ theme }) => shade(0.1, theme.background)};  
  
  input.disabled {
    cursor: not-allowed;
    
    opacity: 0.3;
  }
`;

export const Input = styled.input`  
  width: 100%;
  height: 28px; 
  
  margin: 10px;  
  padding: 5px 10px;
  
  display: flex;
  align-items: center;        
    
  font-size: 13px;
  color: ${({ theme }) => theme.text};
  
  border-radius: 4px; 
  
  background-color: ${({ theme }) => shade(0.5, theme.background)};
  
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;
