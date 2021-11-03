import { ObjectType, Field } from '@nestjs/graphql';
import { Schema, Document } from 'mongoose';
import { Volunteer } from '../../volunteers/entities/volunteer.entity';

@ObjectType()
export class Service {

  @Field()
  id: string;

  @Field()
  description: string;

  @Field(() => [Volunteer])
  volunteers: Volunteer[];

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

  /*@Field()
  officer_in_charge: Volunteer*/

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
}, { timestamps: true,  });

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
