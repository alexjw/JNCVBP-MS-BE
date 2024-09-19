import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateDutyInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  isDeletable: boolean;

  @Field({ nullable: true })
  description: string;
}
