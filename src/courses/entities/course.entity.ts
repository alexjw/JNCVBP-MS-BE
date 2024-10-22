import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { ObjectId } from "mongodb";

/**
 * Represents a course detail.
 *
 * This class is used to represent the individual scores of a volunteer.
 *
 * @property {string} score - The score of the Volunteer for this course.
 *
 * @property {Volunteer} volunteer - The volunteer associated that earned the score.
 */
@ObjectType()
export class CourseDetail {
  @Field()
  score: string;

  @Field({ nullable: true })
  volunteer: Volunteer;
}

/**
 * A course is a way to group a set of volunteers together for a certain
 * training or activity.
 *
 * @property {string} description - The description of the course.
 *
 * @property {Date} date - The date of the course.
 *
 * @property {CourseDetail[]} details - The details of the course, with the
 * score of each volunteer.
 */
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

/**
 * The Mongoose schema for the Course model.
 *
 * @property {string} description - The description of the course.
 *
 * @property {Date} date - The date of the course.
 *
 * @property {CourseDetail[]} details - The details of the course, with the
 * score of each volunteer.
 *
 * @property {boolean} disabled - Whether this course is disabled.
 */
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
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * Represents a course in the MongoDB database.
 *
 * @property {ObjectId} _id - The ID of the course.
 *
 * @property {string} description - The description of the course.
 *
 * @property {Date} date - The date of the course.
 *
 * @property {string} score - The score of the course.
 *
 * @property {CourseDetail[]} details - The details of the course, with the
 * score of each volunteer.
 *
 * @property {boolean} disabled - Whether this course is disabled.
 */
export class CourseModel extends Document {
  _id: ObjectId;
  description: string;
  date: Date;
  score: string;
  details: { score: string; volunteer: { _id: string } }[];
  disabled: boolean;
}
