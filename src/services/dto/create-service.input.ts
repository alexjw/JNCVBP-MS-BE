import { InputType, Field } from '@nestjs/graphql';

@InputType()
class serviceVolunteersInput {

  @Field()
  id: string

}

@InputType()
class officerInChargeInput {

  @Field()
  id: string

}

@InputType()
class fireTypeInput {

  @Field()
  id: string

}

@InputType()
class fireClassInput {

  @Field()
  id: string

}

@InputType()
class FireCauseInput {

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

  @Field(() => officerInChargeInput)
  officer_in_charge: officerInChargeInput;

  @Field(() => fireTypeInput)
  fire_type: fireTypeInput;

  @Field()
  fire_type_total_surface: number;

  @Field()
  fire_type_burned_surface: number;

  @Field()
  fire_type_description: string;

  @Field()
  affected_owner: string;

  @Field()
  affected_owner_description: string;

  @Field(() => FireCauseInput)
  possible_cause: FireCauseInput;

  @Field()
  possible_cause_other_description: string;

  @Field(() => [fireClassInput])
  fire_class: fireClassInput[];

  @Field()
  magnitude: string;

  @Field()
  damage: string;

  /*@Field(() => serviceVolunteersInput)
  officer_in_charge: serviceVolunteersInput*/

}
