import { ObjectType, Field } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import { Document, Schema } from "mongoose";
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
  blood_type: number;

  @Field({ nullable: true })
  status: number;

  @Field({ nullable: true })
  address: string;

  @Field()
  incorporation_date: Date;

  @Field()
  birth_date: Date;

  // references
  @Field(() => Rank, { nullable: true })
  rank?: Rank;
}

export const VolunteerSchema = new Schema(
  {
    name: String,
    code: { type: String, index: true, unique: true },
    address: String,
    incorporation_date: Date,
    blood_type: { type: Number, default: 0 },
    status: Number,
    birth_date: Date,
    rank: {
      _id: { type: Schema.Types.ObjectId, ref: "Rank" },
      required: false,
    },
  },
  { timestamps: true }
);

export class VolunteerModel extends Document {
  name: string;
  code: string;
  address: string;
  blood_type: number;
  status: number;
  incorporation_date: Date;
  birth_date: Date;
  rank: { _id: string };
}
