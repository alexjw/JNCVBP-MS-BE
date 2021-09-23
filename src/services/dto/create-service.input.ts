import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {

  @Field()
  description: string;

}
