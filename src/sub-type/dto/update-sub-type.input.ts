import { CreateSubTypeInput } from "./create-sub-type.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a subType of report.
 */
@InputType()
export class UpdateSubTypeInput extends PartialType(CreateSubTypeInput) {
  @Field()
  id: string;
}
