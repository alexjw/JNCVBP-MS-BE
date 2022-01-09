import { CreateFireCauseInput } from './create-fire-cause.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFireCauseInput extends PartialType(CreateFireCauseInput) {
  @Field()
  id: string;

  @Field()
  name: string;
}
