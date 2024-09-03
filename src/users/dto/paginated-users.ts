import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";

@ObjectType()
export class PaginatedUsers {
  @Field(() => [User])
  items: User[];

  @Field(() => Int)
  totalSize: number;
}
