import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

/**
 * GraphQL type representing a fire class.
 *
 * A fire class is a classification of a fire in terms of its type, e.g. solid, liquid, gas, etc.
 *
 * @property {string} id - The ID of the fire class.
 *
 * @property {string} _id - The MongoDB ID of the fire class.
 *
 * @property {string} name - The name of the fire class.
 */
@ObjectType()
export class FireClass {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: true })
  name: string;
}

/**
 * The Mongoose schema for the FireClass model.
 *
 * @property {string} name - The name of the fire class.
 *
 * @property {boolean} disabled - Whether the fire class is disabled or not.
 */
export const FireClassSchema = new Schema(
  {
    name: String,
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * A document representing a fire class in the MongoDB database.
 *
 * This class provides a way to interact with the FireClass collection in the
 * MongoDB database.
 *
 * @property {ObjectId} _id - The MongoDB ID of the fire class.
 *
 * @property {string} name - The name of the fire class.
 *
 * @property {boolean} disabled - Whether the fire class is disabled or not.
 */
export class FireClassModel extends Document {
  _id: ObjectId;

  name: string;
  disabled: boolean;
}
