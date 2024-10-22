import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

/**
 * A GraphQL type representing a sub-type.
 *
 * A sub-type is a type of service such as a fire, a rescue, etc.
 */
@ObjectType()
export class SubType {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  code: string;
}

/**
 * Mongoose schema for the SubType model.
 *
 * This schema defines the structure of the SubType collection in the
 * MongoDB database.
 */
export const SubTypeSchema = new Schema(
  {
    name: String,
    code: String,
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * A document representing a sub-type in the MongoDB database.
 *
 * This class provides a way to interact with the SubType collection in the
 * MongoDB database.
 */
export class SubTypeModel extends Document {
  _id: ObjectId;
  name: string;
  code: string;
  disabled: boolean;
}
