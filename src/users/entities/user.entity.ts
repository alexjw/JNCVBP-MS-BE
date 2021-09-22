import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import * as mongoose from 'mongoose'

@ObjectType()
export class User {

  @Field()
  id: string;

  @Field()
  name: string;
}

export const UserSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

export class UserModel extends mongoose.Document {

  _id: string;

  name: string;

}
