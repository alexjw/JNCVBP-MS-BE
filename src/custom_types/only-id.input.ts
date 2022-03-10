import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class OnlyIdTypeInput {
  @Field()
  _id: string;
}
