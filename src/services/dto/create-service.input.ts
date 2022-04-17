import { InputType, Field, ObjectType } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";
import { OnlyIdFireTypeInput } from "../../fire-type/dto/only-id-fire-type.input";
import { OnlyIdFireClassInput } from "../../fire-class/dto/only-id-fire-class.input";
import { ResourceUsed } from "../entities/service.entity";

@InputType()
export class Quantity1044Input {
  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  quantity: number;
}

@InputType()
export class ResourceUsedInput {
  @Field({ nullable: true })
  resource: string;

  @Field({ nullable: true })
  quantity: number;
}

@InputType()
export class CreateServiceInput {
  @Field()
  type: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => [OnlyIdVolunteerInput], { defaultValue: [] })
  volunteers: OnlyIdVolunteerInput[];

  @Field({ nullable: true })
  call_time: string;

  @Field({ nullable: true })
  departure_time: string;

  @Field({ nullable: true })
  arrival_time: string;

  @Field({ nullable: true })
  withdrawal_time: string;

  @Field({ nullable: true })
  locality: string;

  @Field({ nullable: true })
  neighborhood: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  place: string;

  @Field({ nullable: true })
  alerted_by: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  received_by: string;

  @Field({ nullable: true })
  crew: string;

  @Field(() => OnlyIdVolunteerInput, { nullable: true })
  officer_in_charge: OnlyIdVolunteerInput;

  @Field(() => OnlyIdFireTypeInput, { nullable: true })
  fire_type: OnlyIdFireTypeInput;

  @Field({ nullable: true })
  fire_type_total_surface: number;

  @Field({ nullable: true })
  fire_type_burned_surface: number;

  @Field({ nullable: true })
  fire_type_description: string;

  @Field({ nullable: true })
  affected_owner: string;

  @Field({ nullable: true })
  affected_owner_description: string;

  @Field(() => OnlyIdFireClassInput, { nullable: true })
  possible_cause: OnlyIdFireClassInput;

  @Field({ nullable: true })
  possible_cause_other_description: string;

  @Field(() => [OnlyIdFireClassInput], { nullable: true })
  fire_class: OnlyIdFireClassInput[];

  @Field({ nullable: true })
  magnitude: string;

  @Field({ nullable: true })
  damage: string;

  @Field({ nullable: true })
  vehicles_used: string;

  @Field({ nullable: true })
  other_units: string;

  @Field({ nullable: true })
  other_occurrences: string;

  @Field({ nullable: true })
  police_force_in_charge: string;

  @Field({ nullable: true })
  judge_in_charge: string;

  @Field(() => [String], { nullable: true })
  damage1041: [string];

  @Field(() => [Quantity1044Input], { nullable: true })
  quantities1044: Quantity1044Input[];

  @Field(() => [String], { nullable: true })
  involved_elements: [string];

  @Field(() => [String], { nullable: true })
  magnitude1041: [string];

  @Field(() => [ResourceUsedInput], { nullable: true })
  resources_used: ResourceUsedInput[];

  @Field({ nullable: true })
  rescue_type: string;
}
