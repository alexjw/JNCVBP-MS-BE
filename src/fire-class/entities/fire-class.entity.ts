import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document, Schema } from 'mongoose';

@ObjectType()
export class FireClass {

  @Field({nullable: true})
  id: string;

  @Field({nullable: true})
  name: string;

}

export const FireClassSchema = new Schema({
  name: String,
}, { timestamps: true });

export class FireClassModel extends Document {

  _id: string;

  name: string;

}
