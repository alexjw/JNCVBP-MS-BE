import { InputType, Field } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";
import { OnlyIdFireTypeInput } from "../../fire-type/dto/only-id-fire-type.input";
import { OnlyIdFireClassInput } from "../../fire-class/dto/only-id-fire-class.input";

@InputType()
export class CreateServiceInput {
  @Field()
  type: string;

  @Field()
  description: string;

  @Field(() => [OnlyIdVolunteerInput], { defaultValue: [] })
  volunteers: OnlyIdVolunteerInput[];

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

  @Field(() => OnlyIdVolunteerInput)
  officer_in_charge: OnlyIdVolunteerInput;

  @Field(() => OnlyIdFireTypeInput)
  fire_type: OnlyIdFireTypeInput;

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

  @Field(() => OnlyIdFireClassInput)
  possible_cause: OnlyIdFireClassInput;

  @Field()
  possible_cause_other_description: string;

  @Field(() => [OnlyIdFireClassInput])
  fire_class: OnlyIdFireClassInput[];

  @Field()
  magnitude: string;

  @Field()
  damage: string;
}
