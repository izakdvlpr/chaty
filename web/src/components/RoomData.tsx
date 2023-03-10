import { Flex, Icon, Text, useTheme } from '@chakra-ui/react';
import { Hash } from 'phosphor-react';
import { darken } from 'polished';

import { Room } from '@/interfaces/api';

interface RoomDataProps {
  room: Room;
  selected?: boolean;
  onNavigateToRoom: (roomId: string) => void;
}

export function RoomData({
  room,
  selected,
  onNavigateToRoom,
}: RoomDataProps): JSX.Element {
  const { colors } = useTheme();

  return (
    <Flex
      px={3}
      py={2}
      align="center"
      borderRadius="md"
      cursor="pointer"
      bgColor={selected ? 'input' : 'transparent'}
      _hover={{ bgColor: darken(0.02, colors.input) }}
      _active={{ bgColor: darken(0.08, colors.input) }}
      onClick={() => onNavigateToRoom(room.id)}
    >
      <Icon
        as={Hash}
        w="1.3rem"
        h="1.3rem"
        mr="0.25rem"
        color="gray.400"
        weight="bold"
      />

      <Text noOfLines={1} color="gray.400" fontWeight="400">
        {room.name}
      </Text>
    </Flex>
  );
}
