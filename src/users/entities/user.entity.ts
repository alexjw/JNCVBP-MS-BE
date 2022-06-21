import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import * as mongoose from "mongoose";

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export class UserModel extends mongoose.Document {
  _id: string;

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  disabled: boolean;
}
