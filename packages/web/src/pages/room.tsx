import { Header } from '@components/Header';
import { RoomList } from '@components/RoomList';
import { RoomData } from '@components/RoomData';

import { Container } from '@styles/pages/Room';

export default function Room() {
  return (
    <Container>
      <Header />
      <RoomList />
      <RoomData />
    </Container>
  );
}
