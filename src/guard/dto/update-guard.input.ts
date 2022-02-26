import { CreateGuardInput } from "./create-guard.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateGuardInput extends PartialType(CreateGuardInput) {
  @Field()
  id: string;
}
