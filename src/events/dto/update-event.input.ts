import { CreateEventInput } from "./create-event.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating an event.
 */
@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  @Field()
  id: string;
}
