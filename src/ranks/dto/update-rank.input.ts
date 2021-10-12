import { CreateRankInput } from './create-rank.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRankInput extends PartialType(CreateRankInput) {

  @Field()
  id: string;

}
