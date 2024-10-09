import { CreateUserInput } from "./create-user.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a user.
 */
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;
}
