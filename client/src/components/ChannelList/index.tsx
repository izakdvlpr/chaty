import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  SectionContent,
  FriendsIcon,
  SettingsIcon,
  Label,  
  List,
  Group,
  Profile,
  AvatarWrapper,
  Avatar  
} from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Link to="/profile">
        <SectionContent>
          <FriendsIcon />
          Amigos
        </SectionContent>
      </Link>
      
      <Link to="/config">
        <SectionContent>
          <SettingsIcon />
          Configurações
        </SectionContent>
      </Link>

      <Label>
        Mensagens Diretas        
      </Label>

      <List>
        {Array.from(Array(10).keys()).map(n => (
          <Link to="/chats/1">
            <Group key={n}>
              <Profile>
                <AvatarWrapper>
                  <Avatar src="https://github.com/zevdvlpr.png" alt="avatar" />
                </AvatarWrapper>

                <h4>Zev</h4>
              </Profile>              
            </Group>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default ChannelList;
