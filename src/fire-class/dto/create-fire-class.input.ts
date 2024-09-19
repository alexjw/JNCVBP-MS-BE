import { InputType, Int, Field } from "@nestjs/graphql";

/**
 * A class representing the input for creating a fire class.
 *
 * The purpose of this class is to provide a way to validate the input
 * for the createFireClass mutation, and to provide a way to automatically generate
 * the GraphQL SDL for the createFireClass mutation.
 */
@InputType()
export class CreateFireClassInput {
  @Field()
  name: string;
}
