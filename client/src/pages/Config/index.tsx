import React from 'react';

import ChannelList from '../../components/ChannelList';
import UserInfo from '../../components/UserInfo';
import ChannelInfo from '../../components/ChannelInfo';

import { Grid, SettingsIcon } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Grid>      
      <ChannelList />
      <UserInfo />
      
      <ChannelInfo
        icon={<SettingsIcon />}
        name="Configurações"
        sections={[{ name: 'Minha Conta' }, { name: 'Aparência' }]}
      />
    </Grid>
  );
};

export default ProfilePage;
