import { InputType, Field } from "@nestjs/graphql";
import { IsEnum, IsOptional } from "class-validator";
import { BloodType } from "src/custom_types/blood_type";
import { OnlyIdTypeInput } from "src/custom_types/only-id.input";
import { VolunteerStatus } from "src/custom_types/volunteer_status";

@InputType()
export class CreateVolunteerInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  @IsOptional()
  address: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(BloodType)
  blood_type: BloodType;

  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(VolunteerStatus)
  status: VolunteerStatus;

  @Field({ nullable: true })
  incorporation_date: Date;

  @Field({ nullable: true })
  birth_date: Date;

  // references
  @Field({ nullable: true })
  rank: OnlyIdTypeInput;
}
