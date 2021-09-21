import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Rank')
export class RankType {

  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  isDeletable: boolean;

  @Field({ nullable: true })
  description: string;

}
