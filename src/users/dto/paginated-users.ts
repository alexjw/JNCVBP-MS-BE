import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";

/**
 * Represents a paginated list of users.
 *
 * @property {User[]} items - An array of users.
 * @property {number} totalSize - The total number of users.
 */
@ObjectType()
export class PaginatedUsers {
  @Field(() => [User])
  items: User[];

  @Field(() => Int)
  totalSize: number;
}
