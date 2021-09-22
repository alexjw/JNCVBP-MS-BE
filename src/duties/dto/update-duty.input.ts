import { CreateDutyInput } from './create-duty.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDutyInput extends PartialType(CreateDutyInput) {

  @Field()
  id: string;

}
