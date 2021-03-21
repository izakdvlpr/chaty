import { format } from 'date-fns';

import { Message, Header, Content } from './styles';

interface User {  
  name: string;
};

interface RoomMessageProps {
  user: User;
  date: Date;
  content: string | React.ReactElement | React.ReactNode;
}

export function RoomMessage({ user, date, content }: RoomMessageProps) {
  return (
    <Message>
      <Header>
        <span>{user.name}</span>

        <time>{format(date, 'HH:mm:ss aaa')}</time>
      </Header>

      <Content>{content}</Content>
    </Message>
  );
}
