import React from 'react';

import {
  Container,
  FriendsContent,
  FriendsIcon,
  Label,
  CreateIcon,
  List,
  Group,
  Profile,
  AvatarWrapper,
  Avatar,
  CloseIcon,
} from './styles';

const SelectChannel: React.FC = () => {
  return (
    <Container>
      <FriendsContent>
        <FriendsIcon />
        Amigos
      </FriendsContent>

      <Label>
        Mensagens Diretas
        <CreateIcon />
      </Label>

      <List>
        {Array.from(Array(10).keys()).map(n => (
          <Group key={n}>
            <Profile>
              <AvatarWrapper>
                <Avatar src="https://github.com/zevdvlpr.png" alt="avatar" />
              </AvatarWrapper>

              <h4>Zev</h4>
            </Profile>

            <CloseIcon />
          </Group>
        ))}
      </List>
    </Container>
  );
};

export default SelectChannel;
