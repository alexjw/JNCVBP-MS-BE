import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AccessToken {
  @Field({ nullable: true })
  access_token: string;
}
