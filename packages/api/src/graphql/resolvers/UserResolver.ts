import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { User } from '@models/User';

import { UserSchema } from '../schemas/UserSchema';

@Resolver()
class UserResolver {
  @Query(() => UserSchema)
  async user(@Arg('name') name: string) {
    let user = await User.findOne({ name });

    if (!user) {
      return new Error('User not Found!');
    }

    return user;
  }

  @Mutation(() => UserSchema)
  async createUser(@Arg('name') name: string) {
    let user = await User.findOne({ name });

    if (user) {
      return new Error('User already exists!')
    }

    return user;
  }
}

export default UserResolver;
