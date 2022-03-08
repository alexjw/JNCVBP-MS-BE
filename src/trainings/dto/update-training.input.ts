import { CreateTrainingInput } from "./create-training.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateTrainingInput extends PartialType(CreateTrainingInput) {
  @Field()
  id: string;
}
