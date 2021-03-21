import { createContext, ReactNode } from 'react';
import {
  useQuery,
  useMutation,
  useSubscription,
  gql,
  QueryResult,
  OperationVariables,
  ApolloError,
} from '@apollo/client';

export interface Message {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface ChatContextData {
  previousMessages: QueryResult<
    {
      previousMessages: Message[];
    },
    OperationVariables
  >;
  receivedMessages: {
    variables: OperationVariables;
    loading: boolean;
    data?: {
      receivedMessages: Message[];
    };
    error?: ApolloError;
  };
  sendMessage: (name: string, content: string) => void;
}

interface ChatContextProps {
  children: ReactNode;
}

const PREVIOUS_MESSAGES = gql`
  query PreviousMessages {
    previousMessages {
      user {
        name
      }
      content
    }
  }
`;

const POST_MESSAGES = gql`
  mutation PostMessages($name: String!, $content: String!) {
    postMessage(name: $name, content: $content) {
      content
      createdAt
    }
  }
`;

const RECEIVED_MESSAGES = gql`
  subscription ReceivedMessages {
    receivedMessages {
      user {
        name
      }
      content
    }
  }
`;

export const ChatContext = createContext({} as ChatContextData);

export function ChatProvider({ children }: ChatContextProps) {
  const previousMessages = useQuery<{
    previousMessages: Message[];
  }>(PREVIOUS_MESSAGES, {
    onError: err => console.error(err),
  });

  const receivedMessages = useSubscription<{
    receivedMessages: Message[];
  }>(RECEIVED_MESSAGES);

  const [postMessage] = useMutation(POST_MESSAGES, {
    onError: err => console.error(err),
  });

  function sendMessage(name: string, content: string) {
    postMessage({
      variables: {
        name,
        content,
      },
    });
  }

  return (
    <ChatContext.Provider
      value={{
        previousMessages,
        receivedMessages,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
