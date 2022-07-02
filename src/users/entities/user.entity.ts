import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import * as mongoose from "mongoose";
import { Schema } from "mongoose";

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
  isAdmin: boolean;

  @Field()
  password: string;
}

export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    isAdmin: { type: Boolean, default: false },
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
  isAdmin: boolean;
  password: string;
  disabled: boolean;
}
