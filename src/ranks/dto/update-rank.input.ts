import { CreateRankInput } from "./create-rank.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a Rank.
 */
@InputType()
export class UpdateRankInput extends PartialType(CreateRankInput) {
  @Field()
  id: string;
}
