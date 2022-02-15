import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFireCauseInput {

  @Field()
  name: string;

}
