import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Volunteer } from "../entities/volunteer.entity";

@ObjectType()
export class PaginatedVolunteers {
  @Field(() => [Volunteer])
  items: Volunteer[];

  @Field(() => Int)
  totalSize: number;
}
