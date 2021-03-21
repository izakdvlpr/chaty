import { ApolloProvider } from '@apollo/client';

import { useApollo } from '@graphql/client';

import { ChatProvider } from '@contexts/ChatContext';

import { GlobalStyles } from '@styles/global';

export default function _App({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ChatProvider>
        <GlobalStyles />

        <Component {...pageProps} />
      </ChatProvider>
    </ApolloProvider>
  );
}
