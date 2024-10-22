import { ObjectType, Field, Int, GraphQLTimestamp } from "@nestjs/graphql";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

/**
 * GraphQL type representing a guard.
 *
 * A guard is a time period that a group of volunteers is assigned to be on duty.
 *
 * @property {string} id - The ID of the guard.
 *
 * @property {number} start_time - The timestamp when the guard starts.
 *
 * @property {number} end_time - The timestamp when the guard shift ends.
 *
 * @property {Volunteer[]} volunteers - The volunteers assigned to this guard.
 */
@ObjectType()
export class Guard {
  @Field()
  id: string;

  @Field(() => GraphQLTimestamp)
  start_time: number;

  @Field(() => GraphQLTimestamp)
  end_time: number;

  @Field(() => [Volunteer], { nullable: true })
  volunteers: Volunteer[];

  @Field({ nullable: true })
  observations: string;
}

/**
 * Mongoose schema for the {@link Guard} GraphQL type.
 *
 * @property {Date} start_time - The timestamp when the guard starts.
 *
 * @property {Date} end_time - The timestamp when the guard shift ends.
 *
 * @property {ObjectId[]} volunteers - The ids of the volunteers assigned to this guard.
 *
 * @property {string} [observations] - Any observations about the guard.
 */
export const GuardSchema = new Schema(
  {
    start_time: Date,
    end_time: Date,
    volunteers: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
      },
    ],
    observations: String,
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * Represents a guard in the MongoDB database.
 *
 * @property {ObjectId} _id - The ID of the guard.
 *
 * @property {number} start_time - The timestamp when the guard starts.
 *
 * @property {number} end_time - The timestamp when the guard shift ends.
 *
 * @property {Volunteer[]} volunteers - The volunteers assigned to this guard.
 *
 * @property {boolean} disabled - Whether the guard is disabled or not.
 *
 * @property {string} [observations] - Any observations about the guard.
 */
@ObjectType()
export class GuardModel extends Document {
  _id: ObjectId;
  start_time: number;
  end_time: number;
  volunteers: { _id: string }[];
  disabled: boolean;
  observations: string;
}
