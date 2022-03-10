import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateRankInput {
  @Field({ nullable: true })
  _id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  isDeletable: boolean;

  // read only field
  // @Field()
  // readonly isDeletable: boolean;

  @Field({ nullable: true })
  description: string;
}
