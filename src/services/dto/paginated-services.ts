import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Service } from "../entities/service.entity";

/**
 * Represents a paginated list of services.
 *
 * The purpose of this class is to provide a simple representation of a
 * paginated list of services.
 *
 * The items property represents the list of services.
 * The totalSize property represents the total number of services.
 */
@ObjectType()
export class PaginatedServices {
  @Field(() => [Service])
  items: Service[];

  @Field(() => Int)
  totalSize: number;
}
