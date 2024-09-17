import { Field, ObjectType } from "@nestjs/graphql";

/**
 * GraphQL type representing an access token.
 *
 * This class is used to represent an access token to the GraphQL schema.
 * It's used to return the access token to the client after a successful login.
 */
@ObjectType()
export class AccessToken {
  @Field({ nullable: true })
  access_token: string;
}
