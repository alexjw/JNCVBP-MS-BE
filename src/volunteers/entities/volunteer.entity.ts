import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { isEnumType } from "graphql";
import { Document, Schema } from "mongoose";
import { BloodType } from "src/custom_types/blood_type";
import { VolunteerStatus } from "src/custom_types/volunteer_status";
import { Rank } from "src/ranks/entities/rank.entity";

@ObjectType()
export class Volunteer {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  _id: string;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  blood_type: string;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  incorporation_date: Date;

  @Field({ nullable: true })
  birth_date: Date;

  // references
  @Field()
  rank?: Rank;
}

export const VolunteerSchema = new Schema(
  {
    name: String,
    code: { type: String, index: true, unique: true },
    address: String,
    incorporation_date: { type: Date, default: new Date() },
    blood_type: { type: String, default: BloodType.NotSet },
    status: { type: String, default: VolunteerStatus.Active },
    birth_date: Date,
    rank: {
      id: { type: Schema.Types.ObjectId, ref: "Rank" },
    },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export class VolunteerModel extends Document {
  _id: ObjectId;
  name: string;
  code: string;
  address: string;
  blood_type: string;
  status: string;
  incorporation_date: Date;
  birth_date: Date;
  rank: { id: string }; // todo Check this
  disabled: boolean;
}
