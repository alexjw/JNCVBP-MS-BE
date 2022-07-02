import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { FireCauseService } from "./fire-cause.service";
import { FireCause } from "./entities/fire-cause.entity";
import { CreateFireCauseInput } from "./dto/create-fire-cause.input";
import { UpdateFireCauseInput } from "./dto/update-fire-cause.input";

@Resolver(() => FireCause)
export class FireCauseResolver {
  constructor(private readonly fireCauseService: FireCauseService) {}

  @Mutation(() => FireCause)
  createFireCause(@Args("createFireCauseInput") createFireCauseInput: CreateFireCauseInput) {
    return this.fireCauseService.create(createFireCauseInput);
  }

  @Query(() => [FireCause], { name: "fireCauses" })
  findAll() {
    return this.fireCauseService.findAll();
  }

  @Query(() => [FireCause])
  fireCausesDisabled() {
    return this.fireCauseService.findAll(true);
  }

  @Query(() => FireCause, { name: "fireCause" })
  findOne(@Args("id") id: string) {
    return this.fireCauseService.findOne(id);
  }

  @Mutation(() => FireCause)
  updateFireCause(@Args("updateFireCauseInput") updateFireCauseInput: UpdateFireCauseInput) {
    return this.fireCauseService.update(updateFireCauseInput.id, updateFireCauseInput);
  }

  @Mutation(() => FireCause)
  removeFireCause(@Args("id") id: string) {
    return this.fireCauseService.remove(id);
  }

  @Mutation(() => FireCause)
  restoreFireCause(@Args("id") id: string) {
    return this.fireCauseService.restore(id);
  }
}
