import { Field, InputType } from "@nestjs/graphql";

/**
 * GraphQL type representing an object with only an id.
 *
 * This type is used when the id of an object is the only relevant
 * information.
 */
@InputType()
export class OnlyIdTypeInput {
  @Field()
  id: string;
}
