import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Volunteer } from "../entities/volunteer.entity";

/**
 * Represents a paginated list of volunteers.
 *
 * This type is used as the return for the query of all volunteers.
 *
 * @property {Volunteer[]} items - The list of volunteers paginated.
 *
 * @property {number} totalSize - The total size of the list of volunteers.
 */
@ObjectType()
export class PaginatedVolunteers {
  @Field(() => [Volunteer])
  items: Volunteer[];

  @Field(() => Int)
  totalSize: number;
}
