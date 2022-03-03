import { InputType, Field } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";

@InputType()
export class CreateEventInput {
  @Field()
  description: string;

  @Field(() => OnlyIdVolunteerInput, { nullable: true })
  created_by?: OnlyIdVolunteerInput;
}
