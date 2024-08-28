import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Service } from "../entities/service.entity";

@ObjectType()
export class PaginatedServices {
  @Field(() => [Service])
  items: Service[];

  @Field(() => Int)
  totalSize: number;
}
