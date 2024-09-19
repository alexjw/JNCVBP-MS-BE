import { InputType, Int, Field } from "@nestjs/graphql";

/**
 * GraphQL input type for creating a sub type.
 */
@InputType()
export class CreateSubTypeInput {
  @Field()
  name: string;

  @Field()
  code: string;
}
