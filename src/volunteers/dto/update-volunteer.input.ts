import { CreateVolunteerInput } from "./create-volunteer.input";
import { InputType, Field, Int, PartialType, GraphQLTimestamp } from "@nestjs/graphql";
import { OnlyIdTypeInput } from "src/custom_types/only-id.input";
import { BloodType } from "src/custom_types/blood_type";
import { VolunteerStatus } from "src/custom_types/volunteer_status";

@InputType()
export class UpdateVolunteerInput extends PartialType(CreateVolunteerInput) {
  @Field()
  id: string;
}
