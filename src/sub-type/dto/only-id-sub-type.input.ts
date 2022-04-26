import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class OnlyIdSubTypeInput {
  @Field()
  _id: string;
}
