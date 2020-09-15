import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.background};
`;

export const Header = styled.h1`
  text-align: center;  
  font-size: 24px;
  line-height: 30px;
`;

export const Block = styled.div`
  margin-top: 20px;
`;

export const Contents = styled.div`
  margin-top: 18px;    
  
  > a {
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
    
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Wave = styled.img`
  width: 100%;
  
  position: absolute;
  bottom: 0px;
  
  z-index: -1;
`;
