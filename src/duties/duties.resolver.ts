import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DutiesService } from "./duties.service";
import { Duty } from "./entities/duty.entity";
import { CreateDutyInput } from "./dto/create-duty.input";
import { UpdateDutyInput } from "./dto/update-duty.input";

/**
 * DutiesResolver is a Nest resolver that handles GraphQL queries and mutations related to duties.
 *
 * It provides endpoints for creating, retrieving, updating and deleting duties.
 *
 * @see DutiesService
 */
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

  @Mutation(() => Duty)
  restoreDuty(@Args("id") id: string) {
    return this.dutiesService.restore(id);
  }
}
