import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVolunteerInput {

  @Field()
  name: string;

}
