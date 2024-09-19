import { InputType, Int, Field } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";

/**
 * Represents a course detail input.
 *
 * A course detail input is used when creating or updating a course.
 *
 * @property {string} score - The score of the course.
 *
 * @property {OnlyIdVolunteerInput} volunteer - The volunteer associated that earned the score.
 */
@InputType()
export class courseDetailInput {
  @Field()
  score: string;

  @Field()
  volunteer: OnlyIdVolunteerInput;
}

/**
 * Represents a course input.
 *
 * A course input is used when creating or updating a course.
 *
 * @property {string} description - The description of the course.
 *
 * @property {Date} date - The date of the course.
 *
 * @property {courseDetailInput[]} details - The details, that mean the scores of the volunteers.
 */
@InputType()
export class CreateCourseInput {
  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => [courseDetailInput])
  details: courseDetailInput[];
}
