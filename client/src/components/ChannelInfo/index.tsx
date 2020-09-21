import React from 'react';

import {
  Container,
  ChannelName,
  Separator,
  Section,
} from './styles';

interface ChannelProps {
  icon: any;
  name: string;
  sections?: {
    name: string;
    isButton?: boolean;
    isActive?: boolean;
  }[];
}

const ChannelInfo: React.FC<ChannelProps> = ({ icon, name, sections }) => {
  return (
    <Container>
      {icon}

      <ChannelName>{name}</ChannelName>

      <Separator />

      {sections?.map(section => (
        <Section
          className={`${section.isButton ? 'button' : ''} ${
            section.isActive ? 'active' : ''
          }`}
        >
          {section.name}
        </Section>
      ))}      
    </Container>
  );
};

export default ChannelInfo;
