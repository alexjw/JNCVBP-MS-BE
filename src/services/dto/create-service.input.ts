import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {

  @Field()
  description: string;

  @Field(() => [serviceVolunteersInput])
  volunteers: serviceVolunteersInput[]

}

@InputType()
class serviceVolunteersInput {

  @Field()
  _id: string

}
