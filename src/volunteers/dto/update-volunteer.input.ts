import { CreateVolunteerInput } from './create-volunteer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVolunteerInput extends PartialType(CreateVolunteerInput) {

  @Field()
  id: string;

}
