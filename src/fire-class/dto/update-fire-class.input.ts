import { CreateFireClassInput } from './create-fire-class.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFireClassInput extends PartialType(CreateFireClassInput) {

  @Field()
  id: string;

  @Field()
  name: string;

}
