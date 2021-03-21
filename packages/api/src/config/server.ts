import { ApolloServer, PubSub } from 'apollo-server';

import { fileLoader } from 'merge-graphql-schemas';
import { buildSchema } from 'type-graphql';

import { join } from 'path';

import { LoggerUtils } from '@utils/LoggerUtils';

export class Server {
  async connect(): Promise<void> {
    const resolvers: any = fileLoader(
      join(
        __dirname,
        '..',
        'graphql',
        'resolvers',
        process.env.NODE_ENV === 'production' ? '*.js' : '*.ts',
      ),
    );

    const schema = await buildSchema({
      resolvers,
    });

    const pubsub = new PubSub();

    const server = new ApolloServer({
      schema,
      subscriptions: {
        path: '/subscriptions',
      },
      context: {
        pubsub,
      },
      introspection: true,
      playground: true,
    });

    server.setGraphQLPath('/graphql');

    server
      .listen({ port: process.env.SERVER_PORT })
      .then(() => LoggerUtils.log('Server started.', { tags: ['HTTP'] }));
  }
}
