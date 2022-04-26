import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Schema, Document } from "mongoose";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { SubType } from "../../sub-type/entities/sub-type.entity";
import { FireCause } from "../../fire-cause/entities/fire-cause.entity";
import { FireClass } from "../../fire-class/entities/fire-class.entity";
import { ObjectId } from "mongodb";

@ObjectType()
export class Quantity1044 {
  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  quantity: number;
}

@ObjectType()
export class ResourceUsed {
  @Field({ nullable: true })
  resource: string;

  @Field({ nullable: true })
  quantity: number;
}

@ObjectType()
export class Service {
  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => [Volunteer], { nullable: true })
  volunteers: Volunteer[];

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
  crew: string; // Grupo de Guardia

  @Field(() => Volunteer, { nullable: true })
  officer_in_charge?: Volunteer;

  @Field(() => SubType, { nullable: true })
  sub_type?: SubType;

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

  @Field({ nullable: true })
  possible_cause: FireCause;

  @Field({ nullable: true })
  possible_cause_other_description: string;

  @Field(() => [FireClass], { nullable: true })
  fire_class: [FireClass]; // fuego clase

  @Field({ nullable: true })
  magnitude: string; // proporción

  @Field({ nullable: true })
  damage: string; // destrucción

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

  @Field(() => [Quantity1044], { nullable: true })
  quantities1044: [Quantity1044];

  @Field(() => [String], { nullable: true })
  involved_elements: [string];

  @Field(() => [String], { nullable: true })
  magnitude1041: [string];

  @Field(() => [ResourceUsed], { nullable: true })
  resources_used: [ResourceUsed];

  @Field({ nullable: true })
  rescue_type: string;
}

export const ServiceSchema = new Schema(
  {
    description: String, // Shared with all
    volunteers: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
      },
    ],
    call_time: String,
    type: String, // Shared with all services
    departure_time: String,
    arrival_time: String,
    withdrawal_time: String,
    locality: String,
    neighborhood: String,
    address: String,
    place: String,
    alerted_by: String,
    phone: String,
    received_by: String,
    crew: String,
    officer_in_charge: {
      _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
      required: false,
    },
    sub_type: {
      _id: { type: Schema.Types.ObjectId, ref: "SubType" },
    },
    fire_type_total_surface: Number,
    fire_type_burned_surface: Number,
    fire_type_description: String,
    affected_owner: String,
    affected_owner_description: String,
    possible_cause: {
      _id: { type: Schema.Types.ObjectId, ref: "FireCause" },
    },
    possible_cause_other_description: String,
    //: String,
    fire_class: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "FireClass" },
      },
    ],
    magnitude: String,
    damage: String,
    vehicles_used: String,
    other_units: String,
    other_occurrences: String,
    police_force_in_charge: String,
    judge_in_charge: String,

    // 10.41
    damage1041: [String],
    quantities1044: [
      {
        type: String,
        quantity: Number,
      },
    ],
    involved_elements: [String], // Involucrados
    magnitude1041: [String],
    resources_used: [
      {
        resource: String,
        quantity: Number,
      },
    ],

    // 10.43
    rescue_type: String,
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// https://stackoverflow.com/questions/7034848/mongodb-output-id-instead-of-id
/*ServiceSchema.virtual('id').get(function(){
  console.log('returning id instead of _id');
  return this._id.toHexString();
});*/

export class ServiceModel extends Document {
  _id: ObjectId;

  description: string;

  volunteers: { _id: ObjectId }[];

  call_time: string;
  type: string;
  departure_time: string;
  arrival_time: string;
  withdrawal_time: string;
  locality: string;
  neighborhood: string;
  address: string;
  place: string;
  alerted_by: string;
  phone: string;
  received_by: string;
  crew: string;
  officer_in_charge?: { _id: ObjectId };
  sub_type?: { _id: ObjectId };
  fire_type_total_surface: number;
  fire_type_burned_surface: number;
  fire_type_description: string;
  affected_owner: string;
  affected_owner_description: string;
  possible_cause: { _id: ObjectId };
  possible_cause_other_description: string;
  //proportion: string;
  fire_class: { _id: ObjectId }[];
  magnitude: string;
  damage: string;
  vehicles_used: string;
  other_units: string;
  other_occurrences: string;
  police_force_in_charge: string;
  judge_in_charge: string;

  damage1041: string[];
  quantities1044: { type: string; quantity: number }[];
  involved_elements: string[];
  magnitude1041: string[];
  resources_used: { resource: string; quantity: number }[];

  rescue_type: string;
  disabled: boolean;
}
