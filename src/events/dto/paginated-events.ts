import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Event } from "../entities/event.entity";

/**
 * Represents a paginated list of events.
 *
 * A paginated list of events is used for the gql query "events".
 *
 * @property {Event[]} items - The list of events.
 *
 * @property {number} totalSize - The total number of existing events.
 */
@ObjectType()
export class PaginatedEvents {
  @Field(() => [Event])
  items: Event[];

  @Field(() => Int)
  totalSize: number;
}
