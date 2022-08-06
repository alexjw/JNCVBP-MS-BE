import { InputType, Field, GraphQLTimestamp } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";

@InputType()
export class CreateGuardInput {
  @Field(() => GraphQLTimestamp)
  start_time: number;

  @Field(() => GraphQLTimestamp)
  end_time: number;

  @Field(() => [OnlyIdVolunteerInput], { nullable: true })
  volunteers: OnlyIdVolunteerInput[];

  @Field({ nullable: true })
  observations: string;
}
