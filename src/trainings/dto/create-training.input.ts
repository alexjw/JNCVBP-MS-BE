import { InputType, Field } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";

/**
 * GraphQL input type for creating a training.
 */
@InputType()
export class CreateTrainingInput {
  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => [OnlyIdVolunteerInput])
  volunteers: OnlyIdVolunteerInput[];
}
