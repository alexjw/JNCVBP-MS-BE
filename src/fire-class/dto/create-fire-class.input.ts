import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFireClassInput {

  @Field()
  name: string;

}
