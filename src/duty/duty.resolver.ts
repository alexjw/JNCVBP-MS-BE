import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { DutyService } from './duty.service';
import { DutyType } from './duty.type';
import { CreateDutyInput } from './duty.input';
import { Duty } from './duty.model';

@Resolver('Duty')
export class DutyResolver {
  constructor(private dutyService: DutyService) { }

  @Mutation(returns => DutyType)
  createDuty(@Args('createDutyInput') createDutyInput: CreateDutyInput): Promise<Duty> {
    return this.dutyService.createDuty(createDutyInput);
  }

  @Mutation(returns => Boolean)
  deleteDuty(@Args('_id') _id: string) {
    return this.dutyService.deleteDuty(_id).then(result => Boolean(result.deletedCount));
  }

  @Mutation(returns => DutyType)
  editDuty(
    @Args('_id') _id: string,
    @Args({ name: 'name', nullable: false }) name: string,
    @Args({ name: 'description', nullable: true }) description: string,
    @Args({ name: 'isDeletable', nullable: true }) isDeletable: boolean) {
    return this.dutyService
      .getDuty(_id)
      .then(duty => {
        duty.name = name || duty.name;
        duty.description = description || duty.description;
        duty.isDeletable = isDeletable || duty.isDeletable;

        return duty.save();
      })
  }

  @Query(returns => DutyType)
  duty(@Args('_id') _id: string): Promise<Duty> {
    return this.dutyService.getDuty(_id);
    // we could set some properties, like isDeletable if not being used
    // .then(duty => {
    //   duty.isDeletable = true;
    //   return duty
    // });
    // return this.dutyService.getDuty(_id);
  }

  @Query(returns => [DutyType])
  duties(): Promise<Duty[]> {
    return this.dutyService.getDuties();
  }

}
