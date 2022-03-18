import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

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

export const TrainingSchema = new Schema(
  {
    description: String,
    date: Date,
    volunteers: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
      },
    ],
  },
  { timestamps: true }
);

export class TrainingModel extends Document {
  _id: ObjectId;
  description: string;
  date: Date;
  volunteers: { _id: ObjectId }[];
}
