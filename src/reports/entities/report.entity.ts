import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Report {
  @Field(() => Number, { nullable: true })
  date: number;
}
