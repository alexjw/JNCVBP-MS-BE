import { CreateFireCauseInput } from "./create-fire-cause.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a fire cause.
 */
@InputType()
export class UpdateFireCauseInput extends PartialType(CreateFireCauseInput) {
  @Field()
  id: string;

  @Field()
  name: string;
}
