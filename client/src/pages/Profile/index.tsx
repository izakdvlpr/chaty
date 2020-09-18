import React from 'react';

import SearchUser from '../../components/SearchUser';
import SelectChannel from '../../components/SelectChannel';
import UserInfo from '../../components/UserInfo';
import Chat from '../../components/Chat';
import UserList from '../../components/UserList';

import { Grid } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Grid>
      <SearchUser />
      <SelectChannel />
      <UserInfo />
      <Chat />
      <UserList />
    </Grid>
  );
};

export default ProfilePage;
