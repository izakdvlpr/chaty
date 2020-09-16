import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  height: 100px;
  width: 100%;
  max-width: 1260px;

  margin: 0 auto;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 44px;
  min-width: 130px;
  min-height: 44px;

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

  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.17s ease, color 0.17s ease;

  &:hover {
    background-color: ${({ theme }) => shade(0.1, theme.primary)};
  }

  @media (max-width: 500px) {
    margin-top: 15px;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const ButtonText = styled.p`
  text-transform: uppercase;
  font-weight: 900;
`;
