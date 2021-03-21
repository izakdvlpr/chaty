import { ObjectType, Field, ID } from 'type-graphql';

import { UserSchema } from './UserSchema';

@ObjectType()
export class MessageSchema {
  @Field(() => ID)
  _id!: string;

  @Field()
  user!: UserSchema;

  @Field()
  content!: string;
  
  @Field()  
  createdAt!: string;
  
  @Field()  
  updatedAt!: string;
}

export interface MessageInput {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
}
