import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ServicesService } from "./services.service";
import { Service, ServiceModel } from "./entities/service.entity";
import { CreateServiceInput } from "./dto/create-service.input";
import { UpdateServiceInput } from "./dto/update-service.input";
import { VolunteersService } from "../volunteers/volunteers.service";
import { Volunteer, VolunteerModel } from "../volunteers/entities/volunteer.entity";
import { SubType, SubTypeModel } from "../sub-type/entities/sub-type.entity";
import { SubTypeService } from "../sub-type/sub-type.service";
import { FireCause, FireCauseModel } from "../fire-cause/entities/fire-cause.entity";
import { FireCauseService } from "../fire-cause/fire-cause.service";
import { FireClass } from "../fire-class/entities/fire-class.entity";
import { FireClassService } from "../fire-class/fire-class.service";
import { PaginatedServices } from "./dto/paginated-services";

@Resolver(() => Service)
export class ServicesResolver {
  constructor(
    private readonly servicesService: ServicesService,
    private volunteerService: VolunteersService,
    private subTypeService: SubTypeService,
    private fireCauseService: FireCauseService,
    private fireClassService: FireClassService
  ) {}

  @Mutation(() => Service)
  createService(@Args("createServiceInput") createServiceInput: CreateServiceInput) {
    return this.servicesService.create(createServiceInput);
  }

  @Query(() => [Service], { name: "services" })
  findAll() {
    return this.servicesService.findAll();
  }

  @Query(() => PaginatedServices, { name: "paginatedServices" })
  findAllPaginated(
    @Args("limit", { defaultValue: 10 }) limit: number,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("sortField", { defaultValue: "id" }) sortField: string,
    @Args("sortOrder", { defaultValue: "desc" }) sortOrder: string,
    @Args("searchText", { defaultValue: "" }) searchText: string
  ) {
    return this.servicesService.findPaginated(limit, offset, sortField, sortOrder, searchText);
  }

  @Query(() => [Service])
  servicesDisabled() {
    return this.servicesService.findAll(true);
  }

  @Query(() => Service, { name: "service" })
  findOne(@Args("id") id: string) {
    return this.servicesService.findOne(id);
  }

  @Mutation(() => Service, { name: "updateService" })
  updateService(@Args("updateServiceInput") updateServiceInput: UpdateServiceInput) {
    return this.servicesService.update(updateServiceInput.id, updateServiceInput);
  }

  @Mutation(() => Service)
  removeService(@Args("id") id: string) {
    return this.servicesService.remove(id);
  }

  @Mutation(() => Service)
  restoreService(@Args("id") id: string) {
    return this.servicesService.restore(id);
  }

  @ResolveField(() => [Volunteer])
  volunteers(@Parent() service: ServiceModel): Promise<VolunteerModel[]> {
    return this.volunteerService.findMany(service.volunteers.map((volunteer) => volunteer._id.toString()));
  }

  @ResolveField(() => Volunteer)
  officer_in_charge(@Parent() service: ServiceModel): Promise<VolunteerModel | null> {
    return this.volunteerService.findOne(service.officer_in_charge?._id.toString());
  }

  @ResolveField(() => SubType)
  sub_type(@Parent() service: ServiceModel): Promise<SubTypeModel | null> {
    return this.subTypeService.findOne(service.sub_type?._id.toString());
  }

  @ResolveField(() => FireCause)
  possible_cause(@Parent() service: ServiceModel): Promise<FireCauseModel | null> {
    return this.fireCauseService.findOne(service.possible_cause?._id.toString());
  }

  @ResolveField(() => FireClass)
  fire_class(@Parent() service: ServiceModel) {
    return this.fireClassService.findMany(service.fire_class.map((fireClass) => fireClass._id.toString()));
  }
}
