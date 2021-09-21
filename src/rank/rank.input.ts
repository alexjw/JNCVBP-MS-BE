import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRankInput {

  @Field()
  name: string;

  @Field({ nullable: true })
  isDeletable: boolean;

  @Field({ nullable: true })
  description: string;

}
