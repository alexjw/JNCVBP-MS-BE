import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";

/**
 * GraphQL type representing a rank.
 *
 * A rank is a classification of a person in terms of its hierarchical position
 * in the organization.
 *
 * @property {string} id - The ID of the rank.
 *
 * @property {string} name - The name of the rank.
 *
 * @property {boolean} isDeletable - Whether the rank is deletable or not.
 *
 * @property {boolean} disabled - Whether the rank is disabled or not.
 */
@ObjectType()
export class Rank {
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
 * Mongoose schema for the Rank model.
 *
 * @property {string} name - The name of the rank.
 *
 * @property {string} description - The description of the rank.
 *
 * @property {boolean} isDeletable - Whether the rank is deletable or not.
 *
 * @property {boolean} disabled - Whether the rank is disabled or not.
 */
export const RankSchema = new Schema(
  {
    name: { type: String, index: true, unique: true },
    description: String,
    isDeletable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * Represents a rank in the MongoDB database.
 *
 * @property {ObjectId} _id - The ID of the rank.
 *
 * @property {string} name - The name of the rank.
 *
 * @property {string} description - The description of the rank.
 *
 * @property {boolean} isDeletable - Whether the rank is deletable or not.
 *
 * @property {boolean} disabled - Whether the rank is disabled or not.
 */
export class RankModel extends Document {
  _id: string;
  name: string;
  description: string;
  isDeletable: boolean;
  disabled: boolean;
}
