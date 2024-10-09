import { CreateVolunteerInput } from "./create-volunteer.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a volunteer.
 */
@InputType()
export class UpdateVolunteerInput extends PartialType(CreateVolunteerInput) {
  @Field()
  id: string;
}
