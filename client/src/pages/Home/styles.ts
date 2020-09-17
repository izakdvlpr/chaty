import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  padding: 0 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 46px;
    font-weight: 700;
    line-height: 120%;

    @media (max-width: 900px) {
      font-size: 30px;
    }

    @media (max-width: 500px) {
      font-size: 22px;
    }
  }

  > p {
    margin-top: 40px;

    text-align: center;

    font-size: 20px;
    line-height: 32px;

    @media (max-width: 900px) {
      margin-top: 30px;

      font-size: 15px;
      line-height: 18px;
    }

    @media (max-width: 500px) {
      margin-top: 25px;

      font-size: 12px;
      line-height: 18px;
    }
  }

  @media (max-width: 900px) {
    padding: 90px;
  }

  @media (max-width: 500px) {
    padding: 40px;
  }
`;

export const Button = styled.button`
  width: 400px;
  height: 44px;
  min-width: 130px;
  min-height: 44px;

  margin-top: 30px;
  padding: 2px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  color: ${({ theme }) => theme.white};

  border-radius: 3px;

  cursor: pointer;

  background-color: ${({ theme }) => theme.black};
  transition: background-color 0.17s ease, color 0.17s ease;

  &:hover {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => shade(0.1, theme.white)};
  }

  @media (max-width: 700px) {
    width: 300px;

    font-size: 12px;
  }

  @media (max-width: 500px) {
    width: 200px;

    font-size: 10px;
  }
`;

export const Wave = styled.img`
  width: 100%;

  position: absolute;
  bottom: 0px;

  z-index: -1;
`;
