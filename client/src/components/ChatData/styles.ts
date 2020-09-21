import { shade } from 'polished';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${({ theme }) => shade(0.4, theme.background)};
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => shade(0.1, theme.background)};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 45px;
  border-radius: 7px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => shade(0.3, theme.background)};
  position: relative;
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
  ~ svg {
    position: relative;
    top: -47%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(MdEmail)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.text};
`;
