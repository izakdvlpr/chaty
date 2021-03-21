import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserSchema {
  @Field(() => ID)
  _id!: string;  
  
  @Field()
  name!: string;
}
