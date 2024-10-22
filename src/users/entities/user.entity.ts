import { ObjectType, Field } from "@nestjs/graphql";
import * as mongoose from "mongoose";

/**
 * GraphQL type representing a user.
 *
 * A user is a person that has been registered in the system.
 */
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

/**
 * Mongoose schema for the User model.
 *
 * The User model is used to store user's data in the database.
 */
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

/**
 * Represents a user in the MongoDB database.
 *
 * A user is a person that has been registered in the system.
 *
 * @property {ObjectId} _id - The ID of the user.
 *
 * @property {string} firstName - The first name of the user.
 *
 * @property {string} lastName - The last name of the user.
 *
 * @property {string} username - The username of the user.
 *
 * @property {string} email - The email of the user.
 *
 * @property {boolean} isAdmin - Whether the user is an administrator or not.
 *
 * @property {string} password - The password of the user.
 *
 * @property {boolean} disabled - Whether the user is disabled or not.
 */
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
