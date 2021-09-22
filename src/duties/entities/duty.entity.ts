import { ObjectType, Field } from '@nestjs/graphql';
import * as mongoose from 'mongoose'

@ObjectType()
export class Duty {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  isDeletable: boolean;

  @Field({ nullable: true })
  description: string;

}

export const DutySchema = new mongoose.Schema({
  name: String,
  description: String,
  isDeletable: Boolean
}, { timestamps: true });

export class DutyModel extends mongoose.Document {

  _id: string;

  name: string;

  description: string;

  isDeletable: boolean;
}
