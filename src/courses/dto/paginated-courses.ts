import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Course } from "../entities/course.entity";

/**
 * Represents a paginated list of courses.
 *
 * This class is used to return a list of courses to the client.
 *
 * @property {Course[]} items - The list of courses.
 *
 * @property {number} totalSize - The total number of courses.
 */
@ObjectType()
export class PaginatedCourses {
  @Field(() => [Course])
  items: Course[];

  @Field(() => Int)
  totalSize: number;
}
