import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class FireCause {
  @Field()
  id: string;

  @Field()
  _id: string;

  @Field()
  name: string;
}

export const FireCauseSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export class FireCauseModel extends Document {
  _id: ObjectId;
  name: string;
}
