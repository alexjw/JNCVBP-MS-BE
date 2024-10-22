import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

/**
 * GraphQL type representing a fire cause.
 *
 * A fire cause is a reason for a fire, the root cause of a fire.
 *
 * @property {string} id - The ID of the fire cause.
 *
 * @property {string} _id - The MongoDB ID of the fire cause.
 *
 * @property {string} name - The name of the fire cause.
 */
@ObjectType()
export class FireCause {
  @Field()
  id: string;

  @Field()
  _id: string;

  @Field()
  name: string;
}

/**
 * Mongoose schema for the FireCause model.
 *
 * This schema defines the structure of the FireCause collection in the
 * MongoDB database.
 *
 * @property {string} name - The name of the fire cause.
 *
 * @property {boolean} disabled - Whether the fire cause is disabled.
 *
 * @property {Date} createdAt - The date when the fire cause was created.
 *
 * @property {Date} updatedAt - The date when the fire cause was last updated.
 */
export const FireCauseSchema = new Schema(
  {
    name: String,
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * A document representing a fire cause in the MongoDB database.
 *
 * This class provides a way to interact with the FireCause collection in the
 * MongoDB database.
 *
 * @property {ObjectId} _id - The MongoDB ID of the fire cause.
 *
 * @property {string} name - The name of the fire cause.
 *
 * @property {boolean} disabled - Whether the fire cause is disabled.
 */
export class FireCauseModel extends Document {
  _id: ObjectId;
  name: string;
  disabled: boolean;
}
