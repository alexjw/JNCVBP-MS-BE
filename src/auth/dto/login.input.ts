import { Field, InputType } from "@nestjs/graphql";

/**
 * A class representing the input for the login mutation.
 *
 * The purpose of this class is to provide a way to validate the input
 * for the login mutation, and to provide a way to automatically generate
 * the GraphQL SDL for the login mutation.
 */
@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
