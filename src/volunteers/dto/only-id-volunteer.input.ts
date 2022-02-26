import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class OnlyIdVolunteerInput {
  @Field()
  _id: string;
}
