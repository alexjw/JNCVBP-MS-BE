import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Guard } from "../entities/guard.entity";

/**
 * Represents a paginated list of guards.
 *
 * This type is used as the return for the searchGuards query.
 *
 * @property {Guard[]} items - The list of guards found.
 *
 * @property {number} totalSize - The total number of items.
 */
@ObjectType()
export class PaginatedGuards {
  @Field(() => [Guard])
  items: Guard[];

  @Field(() => Int)
  totalSize: number;
}
