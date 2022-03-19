import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class FireType {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: true })
  name: string;
}

export const FireTypeSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export class FireTypeModel extends Document {
  _id: ObjectId;

  name: string;
}
