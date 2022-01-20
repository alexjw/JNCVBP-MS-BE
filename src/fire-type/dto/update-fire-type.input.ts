import { CreateFireTypeInput } from './create-fire-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFireTypeInput extends PartialType(CreateFireTypeInput) {
  @Field()
  id: string;

  @Field()
  name: string;
}
