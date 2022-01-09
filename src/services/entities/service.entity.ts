import { ObjectType, Field } from '@nestjs/graphql';
import { Schema, Document } from 'mongoose';
import { Volunteer } from '../../volunteers/entities/volunteer.entity';
import { FireType } from '../../fire-type/entities/fire-type.entity';
import { FireCause } from '../../fire-cause/entities/fire-cause.entity';

@ObjectType()
export class Service {

  @Field()
  id: string;

  @Field()
  description: string;

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
  crew: string;  // Grupo de Guardia

  @Field()
  officer_in_charge: Volunteer

  /*@Field()
  fire_type: FireType

  @Field()
  fire_type_total_surface: number;

  @Field()
  fire_type_burned_surface: number;

  @Field()
  fire_type_description: string;*/

  @Field()
  affected_owner: string;

  @Field()
  affected_owner_description: string;

  /*@Field()
  possible_cause: FireCause

  @Field()
  possible_cause_other_description: string;*/

  @Field()
  proportion: string;

  @Field()
  fire_class: [string]; // fuego clase

  @Field()
  magnitude: string; // proporción

  @Field()
  damage: string; // destrucción

  @Field(() => [Volunteer])
  volunteers: Volunteer[];

}

export const ServiceSchema = new Schema({
  description: String,
  volunteers: [
    {
      _id: { type: Schema.Types.ObjectId, ref: 'Volunteer', alias: 'id' }
    },
  ],
  call_time: String,
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
  /*officer_in_charge: {
    _id: { type: Schema.Types.ObjectId, ref: 'Volunteer', alias: 'id' }
  },*/
}, { timestamps: true });

export class ServiceModel extends Document {

  _id: string;

  description: string;

  volunteers: { _id: string }[];

  call_time: string;
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
  officer_in_charge: { _id: string };

}
