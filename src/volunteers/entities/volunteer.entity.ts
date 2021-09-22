import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import * as mongoose from 'mongoose'

@ObjectType()
export class Volunteer {

  @Field()
  id: string;

  @Field()
  name: string;

}

export const VolunteerSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

export class VolunteerModel extends mongoose.Document{

  _id: string;

  name: string;

}
