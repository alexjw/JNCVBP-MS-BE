import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

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

export const SubTypeSchema = new Schema(
  {
    name: String,
    code: String,
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export class SubTypeModel extends Document {
  _id: ObjectId;
  name: string;
  code: string;
  disabled: boolean;
}
