import { ObjectType, Field } from "@nestjs/graphql";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

/**
 * A GraphQL type representing a training.
 *
 * A training is a type of activity that the volunteers can participate in.
 */
@ObjectType()
export class Training {
  @Field()
  id: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => [Volunteer], { nullable: true })
  volunteers: Volunteer[];
}

/**
 * The Mongoose schema for the Training model.
 */
export const TrainingSchema = new Schema(
  {
    description: String,
    date: Date,
    volunteers: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
      },
    ],
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * A document representing a training in the MongoDB database.
 *
 * This class provides a way to interact with the Training collection in the
 * MongoDB database.
 */
export class TrainingModel extends Document {
  _id: ObjectId;
  description: string;
  date: Date;
  volunteers: { _id: string }[];
  disabled: boolean;
}
