import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Training } from "../entities/training.entity";

@ObjectType()
export class PaginatedTrainings {
  @Field(() => [Training])
  items: Training[];

  @Field(() => Int)
  totalSize: number;
}
