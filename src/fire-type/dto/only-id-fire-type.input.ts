import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class OnlyIdFireTypeInput {
  @Field()
  _id: string;
}
