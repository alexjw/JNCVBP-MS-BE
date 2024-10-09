import { CreateGuardInput } from "./create-guard.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a guard.
 */
@InputType()
export class UpdateGuardInput extends PartialType(CreateGuardInput) {
  @Field()
  id: string;
}
