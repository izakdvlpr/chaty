import { shade, lighten } from 'polished';
import { FaUserFriends } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CL;

  padding: 8px;

  background-color: ${({ theme }) => shade(0.1, theme.background)};

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    &:hover {
      border-radius: 4px;
      background-color: ${({ theme }) => shade(0.4, theme.background)};
    }
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => shade(0.1, theme.background)};
  }
`;

export const SectionContent = styled.div`
  width: 100%;
  height: 45px;

  margin: 3px 0;
  padding: 0 8px;

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};

  border-radius: 4px;

  cursor: pointer;

  transition: background-color 0.2s;
  background-color: transparent;

  &:hover,
  &.active {
    color: ${({ theme }) => lighten(0.25, theme.text)};

    background-color: ${({ theme }) => lighten(0.015, theme.background)};

    svg {
      fill: ${({ theme }) => lighten(0.25, theme.text)};
    }
  }
`;

export const FriendsIcon = styled(FaUserFriends)`
  width: 24px;
  height: 24px;

  margin-right: 10px;

  fill: ${({ theme }) => theme.text};
`;

export const SettingsIcon = styled(MdSettings)`
  width: 24px;
  height: 24px;

  margin-right: 10px;

  fill: ${({ theme }) => theme.text};
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  padding: 0 8px;

  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

export const Group = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3px 0;
  padding: 0 8px;

  cursor: pointer;

  transition: background-color 0.2s;
  background-color: transparent;

  &:hover,
  &.active {
    h4 {
      color: ${({ theme }) => lighten(0.25, theme.text)};
    }

    background-color: ${({ theme }) => lighten(0.015, theme.background)};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${({ theme }) => theme.text};
  }
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