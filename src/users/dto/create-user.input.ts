import { InputType, Field } from "@nestjs/graphql";

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
