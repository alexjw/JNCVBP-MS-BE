import { CreateCourseInput } from "./create-course.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a course.
 */
@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {
  @Field()
  id: string;
}
