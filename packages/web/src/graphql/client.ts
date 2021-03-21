import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client';

type _ApolloClient = ApolloClient<NormalizedCacheObject>;

let apolloClient: _ApolloClient;

function createIsomorphLink() {
  const { HttpLink } = require('@apollo/client/link/http');
  const { getMainDefinition } = require('@apollo/client/utilities');
  const { WebSocketLink } = require('@apollo/client/link/ws');

  const wsLink = process.browser
    ? new WebSocketLink({
        uri: 'ws://localhost:3333/subscriptions',
        options: {
          lazy: true,
          reconnect: true,
        },
      })
    : null;

  const httpLink = new HttpLink({
    uri: 'http://localhost:3333/graphql',
    credentials: 'same-origin',
  });

  const link = process.browser
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);

          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink,
      )
    : httpLink;

  return link;
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null): _ApolloClient {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject): _ApolloClient {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}
