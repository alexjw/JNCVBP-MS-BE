import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { GuardService } from "./guard.service";
import { Guard } from "./entities/guard.entity";
import { CreateGuardInput } from "./dto/create-guard.input";
import { UpdateGuardInput } from "./dto/update-guard.input";
import { Volunteer, VolunteerModel } from "../volunteers/entities/volunteer.entity";
import { Service } from "../services/entities/service.entity";
import { VolunteersService } from "../volunteers/volunteers.service";

@Resolver(() => Guard)
export class GuardResolver {
  constructor(private readonly guardService: GuardService, private volunteerService: VolunteersService) {}

  @Mutation(() => Guard)
  createGuard(@Args("createGuardInput") createGuardInput: CreateGuardInput) {
    return this.guardService.create(createGuardInput);
  }

  @Query(() => [Guard], { name: "guards" })
  findAll() {
    return this.guardService.findAll();
  }

  @Query(() => Guard, { name: "guard" })
  findOne(@Args("id") id: string) {
    return this.guardService.findOne(id);
  }

  @Mutation(() => Guard)
  updateGuard(@Args("updateGuardInput") updateGuardInput: UpdateGuardInput) {
    return this.guardService.update(updateGuardInput.id, updateGuardInput);
  }

  @Mutation(() => Guard)
  removeGuard(@Args("id") id: string) {
    return this.guardService.remove(id);
  }

  @ResolveField(() => [Volunteer])
  volunteers(@Parent() service: Service): Promise<VolunteerModel[]> {
    return this.volunteerService.findMany(service.volunteers.map((volunteer) => volunteer._id));
  }
}