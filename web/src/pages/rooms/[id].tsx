import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';

import { MessageData } from '@/components/MessageData';
import { MessageList } from '@/components/MessageList';
import { RoomList } from '@/components/RoomList';
import { AuthContext } from '@/contexts/AuthContext';
import { Room, GetRoomResponse } from '@/interfaces/api';
import { api } from '@/services/api';

export default function RoomPage(): JSX.Element {
  const router = useRouter();

  const roomId = router.query.id;

  const { user } = useContext(AuthContext);

  const [room, setRoom] = useState<Room | null>(null);

  const handleGetRoom = useCallback(async () => {
    if (!roomId) return;

    const { data } = await api.get<GetRoomResponse>(`rooms/${roomId}`);

    setRoom(data.room);
  }, [roomId]);

  useEffect(() => {
    handleGetRoom();
  }, [handleGetRoom]);

  return (
    <Flex
      as="main"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bgColor="gray.200"
    >
      <RoomList />

      {room && user && (
        <Flex
          flexDir="column"
          w="calc(100% - 300px)"
          h="100%"
          bgColor="background"
        >
          <MessageList roomId={room.id} userId={user.id} />
          <MessageData roomId={room.id} roomName={room.name} userId={user.id} />
        </Flex>
      )}
    </Flex>
  );
}
