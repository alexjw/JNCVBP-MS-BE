import { InputType, Field } from '@nestjs/graphql';
import { Volunteer } from '../../volunteers/entities/volunteer.entity';

@InputType()
class serviceVolunteersInput {

  @Field()
  id: string

}

@InputType()
export class CreateServiceInput {

  @Field()
  description: string;

  @Field(() => [serviceVolunteersInput], { defaultValue: [] })
  volunteers: serviceVolunteersInput[]

  @Field()
  call_time: string;

  @Field()
  departure_time: string;

  @Field()
  arrival_time: string;

  @Field()
  withdrawal_time: string;

  @Field()
  locality: string;

  @Field()
  neighborhood: string;

  @Field()
  address: string;

  @Field()
  place: string;

  @Field()
  alerted_by: string;

  @Field()
  phone: string;

  @Field()
  received_by: string;

  @Field()
  crew: string;

  /*@Field(() => serviceVolunteersInput)
  officer_in_charge: serviceVolunteersInput*/

}
