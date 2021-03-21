import { PubSubEngine } from 'graphql-subscriptions';
import {
  Resolver,
  Query,
  Subscription,
  Mutation,
  Arg,
  PubSub,
} from 'type-graphql';

import { User } from '@models/User';
import { Message } from '@models/Message';

import { MessageSchema } from '../schemas/MessageSchema';

@Resolver()
class MessageResolver {
  @Query(() => [MessageSchema])
  async previousMessages() {
    const messages = await Message.find();

    return messages;
  }

  @Mutation(() => MessageSchema)
  async postMessage(
    @PubSub() pubSub: PubSubEngine,
    @Arg('name') name: string,
    @Arg('content') content: string,
  ) {
    const user = await User.findOne({ name });

    if (!user) {
      return new Error('User not Found!');
    }

    const message = await Message.create({ user, content });

    await pubSub.publish('MESSAGES', {});

    return message;
  }

  @Subscription(() => [MessageSchema], {
    topics: 'MESSAGES',
  })
  async receivedMessages() {
    const messages = await Message.find();

    return messages;
  }
}

export default MessageResolver;
