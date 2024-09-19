import { InputType, Int, Field } from "@nestjs/graphql";

/**
 * The input for creating a fire cause.
 *
 * This type is used as the input for the createFireCause mutation.
 *
 * @property {string} name - The name of the fire cause.
 */
@InputType()
export class CreateFireCauseInput {
  @Field()
  name: string;
}
