import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema, Document } from 'mongoose';
import { Volunteer } from '../../volunteers/entities/volunteer.entity';
import { FireType } from '../../fire-type/entities/fire-type.entity';
import { FireCause } from '../../fire-cause/entities/fire-cause.entity';

@ObjectType()
export class Service {

  @Field({nullable: true})
  _id: string;

  @Field({nullable: true})
  id: string;

  @Field({nullable: true})
  description: string;

  @Field(() => [Volunteer], {nullable: true})
  volunteers: Volunteer[];

  @Field({nullable: true})
  call_time: string;

  @Field({nullable: true})
  departure_time: string;

  @Field({nullable: true})
  arrival_time: string;

  @Field({nullable: true})
  withdrawal_time: string;

  @Field({nullable: true})
  locality: string;

  @Field({nullable: true})
  neighborhood: string;

  @Field({nullable: true})
  address: string;

  @Field({nullable: true})
  place: string;

  @Field({nullable: true})
  alerted_by: string;

  @Field({nullable: true})
  phone: string;

  @Field({nullable: true})
  received_by: string;

  @Field({nullable: true})
  crew: string;  // Grupo de Guardia

  @Field(() => Volunteer, {nullable: true})
  officer_in_charge?: Volunteer

  @Field(() => FireType, {nullable: true})
  fire_type?: FireType

  @Field({nullable: true})
  fire_type_total_surface: number;

  @Field({nullable: true})
  fire_type_burned_surface: number;

  @Field({nullable: true})
  fire_type_description: string;

  @Field({nullable: true})
  affected_owner: string;

  @Field({nullable: true})
  affected_owner_description: string;

  @Field({nullable: true})
  possible_cause: FireCause

  @Field({nullable: true})
  possible_cause_other_description: string;

  @Field({nullable: true})
  proportion: string;

  @Field(() => [String], {nullable: true})
  fire_class: [string]; // fuego clase

  @Field({nullable: true})
  magnitude: string; // proporción

  @Field({nullable: true})
  damage: string; // destrucción

}

export const ServiceSchema = new Schema({
  description: String,
  volunteers: [
    {
      _id: { type: Schema.Types.ObjectId, ref: 'Volunteer' }
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
  officer_in_charge: {
    _id: { type: Schema.Types.ObjectId, ref: 'Volunteer' }, required: false
  },
  fire_type: {
    _id: { type: Schema.Types.ObjectId, ref: 'FireType' }
  },
  fire_type_total_surface: Number,
  fire_type_burned_surface: Number,
  fire_type_description: String,
  affected_owner: String,
  affected_owner_description: String,
  possible_cause: {
    _id: { type: Schema.Types.ObjectId, ref: 'FireCause' }
  },
  possible_cause_other_description: String,
  proportion: String,
  fire_class: {type: [String]},
  magnitude: String,
  damage: String
}, { timestamps: true });

// https://stackoverflow.com/questions/7034848/mongodb-output-id-instead-of-id
/*ServiceSchema.virtual('id').get(function(){
  console.log('returning id instead of _id');
  return this._id.toHexString();
});*/

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
  officer_in_charge?: { _id: string };
  fire_type?: { _id: string };
  fire_type_total_surface: number;
  fire_type_burned_surface: number;
  fire_type_description: string;
  affected_owner: string;
  affected_owner_description: string;
  possible_cause: { _id: string };
  possible_cause_other_description: string;
  proportion: string;
  fire_class: string[];
  magnitude: string;
  damage: string;

}
