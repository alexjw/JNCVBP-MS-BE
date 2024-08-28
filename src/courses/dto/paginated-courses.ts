import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Course } from "../entities/course.entity";

@ObjectType()
export class PaginatedCourses {
  @Field(() => [Course])
  items: Course[];

  @Field(() => Int)
  totalSize: number;
}
