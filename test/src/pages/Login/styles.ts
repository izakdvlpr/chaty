import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    width: 480px;

    padding: 32px;

    box-shadow: ${({ theme }) => `0 2px 10px 0 ${rgba(theme.black, 0.1)}`};
    border-radius: 5px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    background-color: ${({ theme }) => theme.input};

    @media (max-width: 500px) {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
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
