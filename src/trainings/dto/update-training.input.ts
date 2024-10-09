import { CreateTrainingInput } from "./create-training.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a training.
 */
@InputType()
export class UpdateTrainingInput extends PartialType(CreateTrainingInput) {
  @Field()
  id: string;
}
