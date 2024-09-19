import { InputType, Field } from "@nestjs/graphql";

/**
 * The input for creating a rank (For Volunteers)
 */
@InputType()
export class CreateRankInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  isDeletable: boolean;

  @Field({ nullable: true })
  description: string;
}
