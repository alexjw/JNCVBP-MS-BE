import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";

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

export const DutySchema = new Schema(
  {
    name: { type: String, index: true, unique: true },
    description: String,
    isDeletable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export class DutyModel extends Document {
  _id: string;
  name: string;
  description: string;
  isDeletable: boolean;
}
