import { createContext, ReactNode } from 'react';
import { useMutation, useSubscription, gql, ApolloError } from '@apollo/client';

interface User {
  _id: string;
  name: string;
}

interface Message {
  _id: string;
  user: User;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface MessagesData {
  messages: Message[];
}

interface Messages {
  getMessages: {
    data: MessagesData | undefined;
    loading: boolean;
    error: ApolloError | undefined;
  };
}

interface ChatContextData extends Messages {
  sendMessage: (name: string, content: string) => void;
}

interface ChatContextProps {
  children: ReactNode;
}

const GET_MESSAGES = gql`
  subscription Messages {
    messages {
      user {
        name
      }
      content
    }
  }
`;

const POST_MESSAGE = gql`
  mutation PostMessage($name: String!, $message: String!) {
    postMessage(name: $name, content: $message) {
      content
      createdAt
    }
  }
`;

export const ChatContext = createContext({} as ChatContextData);

export function ChatProvider({ children }: ChatContextProps) {
  const { data, loading, error } = useSubscription<MessagesData>(GET_MESSAGES);

  const [postMessage] = useMutation(POST_MESSAGE);

  function sendMessage(name: string, message: string) {
    postMessage({
      variables: {
        name,
        message,
      },
    });
  }

  return (
    <ChatContext.Provider
      value={{
        getMessages: {
          data,
          loading,
          error,
        },
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
