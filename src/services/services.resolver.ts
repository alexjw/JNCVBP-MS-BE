import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ServicesService } from "./services.service";
import { Service, ServiceModel } from "./entities/service.entity";
import { CreateServiceInput } from "./dto/create-service.input";
import { UpdateServiceInput } from "./dto/update-service.input";
import { VolunteersService } from "../volunteers/volunteers.service";
import { Volunteer, VolunteerModel } from "../volunteers/entities/volunteer.entity";
import { FireType, FireTypeModel } from "../fire-type/entities/fire-type.entity";
import { FireTypeService } from "../fire-type/fire-type.service";
import { FireCause, FireCauseModel } from "../fire-cause/entities/fire-cause.entity";
import { FireCauseService } from "../fire-cause/fire-cause.service";
import { FireClass } from "../fire-class/entities/fire-class.entity";
import { FireClassService } from "../fire-class/fire-class.service";

@Resolver(() => Service)
export class ServicesResolver {
  constructor(
    private readonly servicesService: ServicesService,
    private volunteerService: VolunteersService,
    private fireTypeService: FireTypeService,
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

  @Query(() => Service, { name: "service" })
  findOne(@Args("id") id: string) {
    return this.servicesService.findOne(id);
  }

  @Mutation(() => Service)
  updateService(@Args("updateServiceInput") updateServiceInput: UpdateServiceInput) {
    return this.servicesService.update(updateServiceInput.id, updateServiceInput);
  }

  @Mutation(() => Service)
  removeService(@Args("id") id: string) {
    return this.servicesService.remove(id);
  }

  @ResolveField(() => [Volunteer])
  volunteers(@Parent() service: ServiceModel): Promise<VolunteerModel[]> {
    return this.volunteerService.findMany(service.volunteers.map((volunteer) => volunteer._id.toString()));
  }

  @ResolveField(() => Volunteer)
  officer_in_charge(@Parent() service: ServiceModel): Promise<VolunteerModel | null> {
    return this.volunteerService.findOne(service.officer_in_charge?._id.toString());
  }

  @ResolveField(() => FireType)
  fire_type(@Parent() service: ServiceModel): Promise<FireTypeModel | null> {
    return this.fireTypeService.findOne(service.fire_type?._id.toString());
  }

  @ResolveField(() => FireCause)
  possible_cause(@Parent() service: ServiceModel): Promise<FireCauseModel | null> {
    return this.fireCauseService.findOne(service.possible_cause?._id.toString());
  }

  @ResolveField(() => FireClass)
  fire_class(@Parent() service: ServiceModel) {
    return this.fireCauseService.findMany(service.fire_class.map((fireClass) => fireClass._id.toString()));
  }
}
