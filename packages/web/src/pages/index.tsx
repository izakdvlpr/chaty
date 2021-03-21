import { GetServerSideProps } from 'next';

import { initializeApollo } from '../graphql/client';

import { Form } from '@components/Form';

import { Container } from '@styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Form />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
