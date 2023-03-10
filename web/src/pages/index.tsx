import { Flex } from '@chakra-ui/react';

import { RoomList } from '@/components/RoomList';

export default function HomePage(): JSX.Element {
  return (
    <Flex as="main" w="100vw" h="100vh" bgColor="background">
      <RoomList />
    </Flex>
  );
}
