import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFireTypeInput {

  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  extra_detail1_label: string;

  @Field()
  extra_detail1_value: string;

  @Field()
  extra_detail2_label: string;

  @Field()
  extra_detail2_value: string;

  @Field()
  extra_detail3_label: string;

  @Field()
  extra_detail3_value: string;

}
