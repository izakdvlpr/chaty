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

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {  
    font-size: 24px;
    line-height: 30px;
  }
  
  > p {
    font-size: 14px;
    color: #b9bbbe;
    line-height: 40px;
  }
`;

export const Block = styled.div`
  margin-top: 20px;
`;

export const Contents = styled.div`
  margin-top: 18px;

  font-size: 14px;
  color: #72767d;

  > a {
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