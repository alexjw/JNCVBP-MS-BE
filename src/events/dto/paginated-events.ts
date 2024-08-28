import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Event } from "../entities/event.entity";

@ObjectType()
export class PaginatedEvents {
  @Field(() => [Event])
  items: Event[];

  @Field(() => Int)
  totalSize: number;
}
