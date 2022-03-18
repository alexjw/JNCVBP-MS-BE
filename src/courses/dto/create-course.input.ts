import { InputType, Int, Field } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";

@InputType()
export class courseDetailInput {
  @Field()
  score: string;

  @Field()
  volunteer: OnlyIdVolunteerInput;
}

@InputType()
export class CreateCourseInput {
  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => [courseDetailInput])
  details: courseDetailInput[];
}
