import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { FireClassService } from "./fire-class.service";
import { FireClass } from "./entities/fire-class.entity";
import { CreateFireClassInput } from "./dto/create-fire-class.input";
import { UpdateFireClassInput } from "./dto/update-fire-class.input";

/**
 * FireClassResolver is a Nest resolver that handles GraphQL queries and mutations related to Fire Classes.
 *
 * It provides endpoints for creating, retrieving, updating and deleting Fire Classes.
 *
 * @see FireClassService
 */
@Resolver(() => FireClass)
export class FireClassResolver {
  constructor(private readonly fireClassService: FireClassService) {}

  @Mutation(() => FireClass)
  createFireClass(@Args("createFireClassInput") createFireClassInput: CreateFireClassInput) {
    return this.fireClassService.create(createFireClassInput);
  }

  @Query(() => [FireClass], { name: "fireClasses" })
  findAll() {
    return this.fireClassService.findAll();
  }

  @Query(() => [FireClass])
  fireClassesDisabled() {
    return this.fireClassService.findAll(true);
  }

  @Query(() => FireClass, { name: "fireClass" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.fireClassService.findOne(id);
  }

  @Mutation(() => FireClass)
  updateFireClass(@Args("updateFireClassInput") updateFireClassInput: UpdateFireClassInput) {
    return this.fireClassService.update(updateFireClassInput.id, updateFireClassInput);
  }

  @Mutation(() => FireClass)
  removeFireClass(@Args("id") id: string) {
    return this.fireClassService.remove(id);
  }

  @Mutation(() => FireClass)
  restoreFireClass(@Args("id") id: string) {
    return this.fireClassService.restore(id);
  }
}
