import { Divider, Flex, Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Plus } from 'phosphor-react';
import { useCallback, useEffect, useState } from 'react';

import { Room, GetRoomsResponse } from '@/interfaces/api';
import { api } from '@/services/api';

import { RoomData } from './RoomData';

export function RoomList(): JSX.Element {
  const router = useRouter();

  const [rooms, setRooms] = useState<Room[]>([]);

  const navigateToRoom = useCallback((roomId: string) => {
    router.push(`/rooms/${roomId}`);
  }, []);

  const getRooms = useCallback(async () => {
    const { data } = await api.get<GetRoomsResponse>('rooms');

    setRooms(data.rooms);
  }, []);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  return (
    <Flex w="300px" h="100%" flexDir="column" p={6} bgColor="sidebar">
      <Flex w="100%" px={3} py={2} align="center" justify="space-between">
        <Text color="gray.400" fontWeight="500" textTransform="uppercase">
          Salas
        </Text>

        <Icon
          as={Plus}
          w="1.3rem"
          h="1.3rem"
          mr="0.25rem"
          color="gray.400"
          weight="bold"
          cursor="pointer"
        />
      </Flex>

      <Divider mb={3} borderColor="gray.600" />

      {rooms.length > 0 &&
        rooms.map(room => (
          <RoomData
            key={room.id}
            room={room}
            selected={router.query.id === room.id}
            onNavigateToRoom={navigateToRoom}
          />
        ))}
    </Flex>
  );
}
