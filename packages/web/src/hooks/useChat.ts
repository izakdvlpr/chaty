import { useContext } from 'react';

import { ChatContext } from '@contexts/ChatContext';

export function useChat() {
  const context = useContext(ChatContext);

  return context;
}