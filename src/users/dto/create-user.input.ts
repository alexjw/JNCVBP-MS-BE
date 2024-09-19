import { InputType, Field } from "@nestjs/graphql";

/**
 * GraphQL input type for creating a User.
 */
@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  isAdmin: boolean;

  @Field()
  password: string;
}
