import { ObjectType, Field } from "@nestjs/graphql";
import { ObjectId } from "mongodb";
import { Document, Schema } from "mongoose";
import { BloodType } from "src/custom_types/blood_type";
import { VolunteerStatus } from "src/custom_types/volunteer_status";
import { Rank } from "src/ranks/entities/rank.entity";

/**
 * A GraphQL type representing a volunteer.
 *
 * A volunteer is a person who has or had an active participation in the organization.
 */
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

/**
 * Mongoose schema for the Volunteer model.
 *
 * This schema defines the structure of the Volunteer collection in the
 * MongoDB database.
 */
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

/**
 * Represents a volunteer in the MongoDB database.
 *
 * @property {ObjectId} _id - The ID of the volunteer.
 *
 * @property {string} name - The name of the volunteer.
 *
 * @property {string} code - The code of the volunteer.
 *
 * @property {string} address - The address of the volunteer.
 *
 * @property {string} blood_type - The blood type of the volunteer.
 *
 * @property {string} status - The status of the volunteer.
 *
 * @property {Date} incorporation_date - The date when the volunteer was incorporated.
 *
 * @property {Date} birth_date - The birth date of the volunteer.
 *
 * @property {Rank} rank - The rank of the volunteer.
 *
 * @property {boolean} disabled - Whether the volunteer is disabled.
 */
export class VolunteerModel extends Document {
  _id: ObjectId;
  name: string;
  code: string;
  address: string;
  blood_type: string;
  status: string;
  incorporation_date: Date;
  birth_date: Date;
  rank: { id: string };
  disabled: boolean;
}
