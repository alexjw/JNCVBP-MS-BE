import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { SubTypeService } from "./sub-type.service";
import { SubType } from "./entities/sub-type.entity";
import { CreateSubTypeInput } from "./dto/create-sub-type.input";
import { UpdateSubTypeInput } from "./dto/update-sub-type.input";

/**
 * SubTypeResolver is a Nest resolver that handles GraphQL queries and mutations related to Sub-Types.
 *
 * It provides endpoints for creating, retrieving, updating and deleting Sub-Types.
 *
 * @see SubTypeService
 */
@Resolver(() => SubType)
export class SubTypeResolver {
  constructor(private readonly subTypeService: SubTypeService) {}

  @Mutation(() => SubType)
  createSubType(@Args("createSubTypeInput") createSubTypeInput: CreateSubTypeInput) {
    return this.subTypeService.create(createSubTypeInput);
  }

  @Query(() => [SubType], { name: "subTypes" })
  findAll() {
    return this.subTypeService.findAll();
  }

  @Query(() => [SubType])
  subTypesDisabled() {
    return this.subTypeService.findAll(true);
  }

  @Query(() => SubType, { name: "subType" })
  findOne(@Args("id") id: string) {
    return this.subTypeService.findOne(id);
  }

  @Mutation(() => SubType)
  updateSubType(@Args("updateSubTypeInput") updateSubTypeInput: UpdateSubTypeInput) {
    return this.subTypeService.update(updateSubTypeInput.id, updateSubTypeInput);
  }

  @Mutation(() => SubType)
  removeSubType(@Args("id") id: string) {
    return this.subTypeService.remove(id);
  }

  @Mutation(() => SubType)
  restoreSubType(@Args("id") id: string) {
    return this.subTypeService.restore(id);
  }
}
