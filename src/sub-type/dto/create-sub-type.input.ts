import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateSubTypeInput {
  @Field()
  name: string;
}
