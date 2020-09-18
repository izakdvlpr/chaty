import React from 'react';

import { Container, Input } from './styles';

const SearchUser: React.FC = () => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Encontre alguém pra conversar"
        className="disabled"
        disabled
      />
    </Container>
  );
};

export default SearchUser;
