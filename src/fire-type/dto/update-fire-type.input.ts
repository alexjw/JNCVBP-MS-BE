import { CreateFireTypeInput } from './create-fire-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFireTypeInput extends PartialType(CreateFireTypeInput) {
  @Field()
  id: string;

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
