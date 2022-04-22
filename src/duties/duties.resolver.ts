import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { DutiesService } from "./duties.service";
import { Duty } from "./entities/duty.entity";
import { CreateDutyInput } from "./dto/create-duty.input";
import { UpdateDutyInput } from "./dto/update-duty.input";

@Resolver(() => Duty)
export class DutiesResolver {
  constructor(private readonly dutiesService: DutiesService) {}

  @Mutation(() => Duty)
  createDuty(@Args("createDutyInput") createDutyInput: CreateDutyInput) {
    return this.dutiesService.create(createDutyInput);
  }

  @Query(() => [Duty], { name: "duties" })
  findAll() {
    return this.dutiesService.findAll();
  }

  @Query(() => [Duty])
  dutiesDisabled() {
    return this.dutiesService.findAll(true);
  }

  @Query(() => Duty, { name: "duty" })
  findOne(@Args("id") id: string) {
    return this.dutiesService.findOne(id);
  }

  @Mutation(() => Duty)
  updateDuty(@Args("updateDutyInput") updateDutyInput: UpdateDutyInput) {
    return this.dutiesService.update(updateDutyInput.id, updateDutyInput);
  }

  @Mutation(() => Duty)
  removeDuty(@Args("id") id: string) {
    return this.dutiesService.remove(id);
  }
}
