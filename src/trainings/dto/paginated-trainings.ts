import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Training } from "../entities/training.entity";

/**
 * Represents a paginated list of Trainings.
 *
 * This class is used to return a set of Trainings with pagination
 * information from the GraphQL API.
 */
@ObjectType()
export class PaginatedTrainings {
  @Field(() => [Training])
  items: Training[];

  @Field(() => Int)
  totalSize: number;
}
