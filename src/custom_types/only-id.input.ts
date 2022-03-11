import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class OnlyIdTypeInput {
  @Field()
  id: string;
}
