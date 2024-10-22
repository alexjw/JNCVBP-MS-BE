import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";

/**
 * GraphQL type representing a duty.
 *
 * This class is used to represent a duty in the GraphQL schema.
 *
 * @property {string} id - The ID of the duty.
 *
 * @property {string} name - The name of the duty.
 *
 * @property {boolean} isDeletable - Whether the duty is deletable or not.
 */
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

/**
 * Mongoose schema for the Duty model.
 *
 * @property {string} name - The name of the duty.
 *
 * @property {string} description - The description of the duty.
 *
 * @property {boolean} isDeletable - Whether the duty is deletable or not.
 *
 * @property {boolean} disabled - Whether the duty is disabled or not.
 */
export const DutySchema = new Schema(
  {
    name: { type: String, index: true, unique: true },
    description: String,
    isDeletable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * Represents a duty in the MongoDB database.
 *
 * @property {ObjectId} _id - The ID of the duty.
 *
 * @property {string} name - The name of the duty.
 *
 * @property {string} description - The description of the duty.
 *
 * @property {boolean} isDeletable - Whether the duty is deletable or not.
 *
 * @property {boolean} disabled - Whether the duty is disabled or not.
 */
export class DutyModel extends Document {
  _id: string;
  name: string;
  description: string;
  isDeletable: boolean;
  disabled: boolean;
}
