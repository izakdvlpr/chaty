import React from 'react';

import ChannelList from '../../components/ChannelList';
import UserInfo from '../../components/UserInfo';
import ChatData from '../../components/ChatData';
import UserList from '../../components/UserList';

import { Grid } from './styles';

const ChatPage: React.FC = () => {
  return (
    <Grid>      
      <ChannelList />
      <UserInfo />

      <ChatData />

      <UserList />
    </Grid>
  );
};

export default ChatPage;
