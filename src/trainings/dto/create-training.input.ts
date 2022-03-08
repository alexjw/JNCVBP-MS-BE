import { InputType, Field } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";

@InputType()
export class CreateTrainingInput {
  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => [OnlyIdVolunteerInput])
  volunteers: OnlyIdVolunteerInput[];
}
