import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Profile,
  AvatarWrapper,
  Avatar,
  UserData,
  Icons,
  LogoutIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <AvatarWrapper>
          <Avatar src="https://github.com/zevdvlpr.png" alt="avatar" />
        </AvatarWrapper>

        <UserData>
          <strong>zevdvlpr</strong>
          <span>#7777</span>
        </UserData>
      </Profile>

      <Icons>
        <Link to="/logout">
          <LogoutIcon />
        </Link>
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
