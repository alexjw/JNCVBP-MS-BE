import { CreateSubTypeInput } from "./create-sub-type.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateSubTypeInput extends PartialType(CreateSubTypeInput) {
  @Field()
  id: string;

  @Field()
  name: string;
}
