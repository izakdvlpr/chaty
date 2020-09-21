import { shade } from 'polished';
import { CgLogOut } from 'react-icons/cg';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-top: 2px solid rgba(0, 0, 0, 0.2);

  background-color: ${({ theme }) => shade(0.1, theme.background)};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  margin-right: 12px;

  position: relative;

  &::after {
    height: 10px;
    width: 10px;

    position: absolute;
    bottom: 0;
    right: 0;

    border-radius: 50%;

    content: '';

    background-color: ${({ theme }) => theme.idle};
  }
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    display: block;
  }

  > span {
    font-size: 13px;
    color: ${({ theme }) => theme.text};
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  opacity: 0.7;

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const LogoutIcon = styled(CgLogOut)`
  ${iconCSS};
`;