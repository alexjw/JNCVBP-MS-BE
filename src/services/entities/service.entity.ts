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

}

export const ServiceSchema = new Schema({
  description: String,
  volunteers: [
    {
      _id: { type: Schema.Types.ObjectId, ref: 'Volunteer' }
    },
  ]
}, { timestamps: true,  });

export class ServiceModel extends Document {

  _id: string;

  description: string;

  volunteers: { _id: string }[];

}
