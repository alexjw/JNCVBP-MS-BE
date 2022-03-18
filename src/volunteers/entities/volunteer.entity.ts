import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Volunteer {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  _id: string;

  @Field()
  name: string;
}

export const VolunteerSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export class VolunteerModel extends mongoose.Document {
  _id: ObjectId;

  name: string;
}
