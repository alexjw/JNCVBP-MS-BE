import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class OnlyIdFireClassInput {
  @Field()
  _id: string;
}
