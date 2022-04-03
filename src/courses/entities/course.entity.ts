import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { Volunteer, VolunteerModel } from "../../volunteers/entities/volunteer.entity";
import { ObjectId } from "mongodb";

@ObjectType()
export class CourseDetail {
  @Field()
  score: string;

  @Field({ nullable: true })
  volunteer: Volunteer;
}

@ObjectType()
export class Course {
  @Field()
  id: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => [CourseDetail], { nullable: true })
  details: CourseDetail[];
}

export const CourseSchema = new Schema(
  {
    description: String,
    date: Date,
    details: [
      {
        score: String,
        volunteer: {
          _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
        },
      },
    ],
  },
  { timestamps: true }
);

export class CourseModel extends Document {
  _id: ObjectId;
  description: string;
  date: Date;
  score: string;
  details: { score: string; volunteer: { _id: string } }[];
}
