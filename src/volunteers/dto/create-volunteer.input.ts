import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVolunteerInput {

  @Field()
  name: string;

}
