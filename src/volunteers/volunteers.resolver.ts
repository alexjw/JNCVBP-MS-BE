import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { VolunteersService } from "./volunteers.service";
import { Volunteer, VolunteerModel } from "./entities/volunteer.entity";
import { CreateVolunteerInput } from "./dto/create-volunteer.input";
import { UpdateVolunteerInput } from "./dto/update-volunteer.input";
import { Rank, RankModel } from "src/ranks/entities/rank.entity";
import { RanksService } from "src/ranks/ranks.service";
import { GqlAuthGuard } from "../auth/gql.auth.guard";
import { UseGuards } from "@nestjs/common";
import { PaginatedVolunteers } from "./dto/paginated-volunteers";

/**
 * VolunteersResolver is a Nest resolver that handles GraphQL queries and mutations related to Volunteers.
 *
 * It provides endpoints for creating, retrieving, updating and deleting Volunteers.
 *
 * @see VolunteersService
 */
@Resolver(() => Volunteer)
export class VolunteersResolver {
  constructor(private readonly service: VolunteersService, private rankService: RanksService) {}

  @Mutation(() => Volunteer)
  createVolunteer(@Args("createVolunteerInput") createVolunteerInput: CreateVolunteerInput) {
    return this.service.create(createVolunteerInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Volunteer], { name: "volunteers" })
  findAll() {
    return this.service.findAll();
  }

  @Query(() => PaginatedVolunteers, { name: "paginatedVolunteers" })
  findAllPaginated(
    @Args("limit", { defaultValue: 10 }) limit: number,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("sortField", { defaultValue: "id" }) sortField: string,
    @Args("sortOrder", { defaultValue: "desc" }) sortOrder: string,
    @Args("searchText", { defaultValue: "" }) searchText: string,
    @Args("disabled", { defaultValue: false }) disabled: boolean
  ) {
    return this.service.findPaginated(limit, offset, sortField, sortOrder, searchText, disabled);
  }

  @Query(() => [Volunteer])
  volunteersDisabled() {
    return this.service.findAll(true);
  }

  @Query(() => Volunteer, { name: "volunteer" })
  findOne(@Args("id") id: string) {
    return this.service.findOne(id);
  }

  @Mutation(() => Volunteer, { name: "updateVolunteer" })
  updateVolunteer(@Args("updateVolunteerInput") updateVolunteerInput: UpdateVolunteerInput) {
    return this.service.update(updateVolunteerInput.id, updateVolunteerInput);
  }

  @Mutation(() => Volunteer)
  removeVolunteer(@Args("id") id: string) {
    return this.service.remove(id);
  }

  @Mutation(() => Volunteer)
  restoreVolunteer(@Args("id") id: string) {
    return this.service.restore(id);
  }

  @ResolveField(() => Rank)
  rank(@Parent() volunteer: VolunteerModel): Promise<RankModel | null> {
    return this.rankService.findOne(volunteer.rank?.id);
  }
}
