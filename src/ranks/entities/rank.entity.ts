import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";

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

export const RankSchema = new Schema(
  {
    name: { type: String, index: true, unique: true },
    description: String,
    isDeletable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export class RankModel extends Document {
  _id: string;
  name: string;
  description: string;
  isDeletable: boolean;
  disabled: boolean;
}
