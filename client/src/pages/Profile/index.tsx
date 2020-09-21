import React from 'react';

import ChannelInfo from '../../components/ChannelInfo';
import ChannelList from '../../components/ChannelList';
import UserInfo from '../../components/UserInfo';
import { Grid, FriendsIcon } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Grid>
      <ChannelList />
      <UserInfo />

      <ChannelInfo
        icon={<FriendsIcon />}
        name="Amigos"
        sections={[
          { name: 'Todos' },
          { name: 'Adicionar amigo', isButton: true },
        ]}
      />
    </Grid>
  );
};

export default ProfilePage;
