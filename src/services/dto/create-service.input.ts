import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {

  @Field()
  description: string;

  @Field(() => [serviceVolunteersInput], { defaultValue: [] })
  volunteers: serviceVolunteersInput[]

}

@InputType()
class serviceVolunteersInput {

  @Field()
  id: string

}
