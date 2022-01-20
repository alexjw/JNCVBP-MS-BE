import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ServicesService } from './services.service';
import { Service } from './entities/service.entity';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { VolunteersService } from '../volunteers/volunteers.service';
import { Volunteer, VolunteerModel } from '../volunteers/entities/volunteer.entity';
import { DocumentQuery } from 'mongoose';
import { FireType, FireTypeModel } from '../fire-type/entities/fire-type.entity';
import { FireTypeService } from '../fire-type/fire-type.service';

@Resolver(() => Service)
export class ServicesResolver {
  constructor(private readonly servicesService: ServicesService, private volunteerService: VolunteersService, private fireTypeService: FireTypeService) {}

  @Mutation(() => Service)
  createService(@Args('createServiceInput') createServiceInput: CreateServiceInput) {
    return this.servicesService.create(createServiceInput);
  }

  @Query(() => [Service], { name: 'services' })
  findAll() {
    return this.servicesService.findAll();
  }

  @Query(() => Service, { name: 'service' })
  findOne(@Args('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Mutation(() => Service)
  updateService(@Args('updateServiceInput') updateServiceInput: UpdateServiceInput) {
    return this.servicesService.update(updateServiceInput.id, updateServiceInput);
  }

  @Mutation(() => Service)
  removeService(@Args('id') id: string) {
    return this.servicesService.remove(id);
  }

  @ResolveField(() => [Volunteer])
  volunteers(@Parent() service: Service): DocumentQuery<VolunteerModel[], VolunteerModel, {}> {
    return this.volunteerService.findMany(service.volunteers.map(volunteer => volunteer.id));
  }

  @ResolveField(() => Volunteer)
  officer_in_charge(@Parent() service: Service): DocumentQuery<VolunteerModel | null, VolunteerModel, {}> {
    return this.volunteerService.findOne(service.officer_in_charge?.id);
  }

  @ResolveField(() => FireType)
  fire_type(@Parent() service: Service): DocumentQuery<FireTypeModel | null, FireTypeModel, {}> {
    return this.fireTypeService.findOne(service.fire_type?.id);
  }
}
