import { InputType, Field } from "@nestjs/graphql";
import { OnlyIdUserInput } from "../../users/dto/only-id-user-input";

/**
 * A class representing the input for creating an event.
 *
 * This class is used as the input for the createEvent mutation.
 *
 * @property {string} description - The description of the event.
 *
 * @property {OnlyIdUserInput} created_by - The user who created the event.
 */
@InputType()
export class CreateEventInput {
  @Field()
  description: string;

  @Field(() => OnlyIdUserInput, { nullable: true })
  created_by?: OnlyIdUserInput;
}
