import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 44px;
  min-width: 130px;
  min-height: 44px;

  margin-top: 20px;
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
`;
