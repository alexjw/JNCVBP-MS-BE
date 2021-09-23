import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema, Document } from 'mongoose';

@ObjectType()
export class Service {

  @Field()
  id: string;

  @Field()
  description: string;

}

export const ServiceSchema = new Schema({
  description: String
}, { timestamps: true,  });

export class ServiceModel extends Document {

  _id: string;

  description: string;

}
