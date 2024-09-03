import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Guard } from "../entities/guard.entity";

@ObjectType()
export class PaginatedGuards {
  @Field(() => [Guard])
  items: Guard[];

  @Field(() => Int)
  totalSize: number;
}
