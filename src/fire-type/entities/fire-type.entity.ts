import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document, Schema } from 'mongoose';

@ObjectType()
export class FireType {

  @Field({nullable: true})
  id: string;

  @Field({nullable: true})
  name: string;

}

export const FireTypeSchema = new Schema({
  name: String,
}, { timestamps: true });

export class FireTypeModel extends Document {

  _id: string;

  name: string;

}
