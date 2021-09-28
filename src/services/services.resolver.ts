import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ServicesService } from './services.service';
import { Service } from './entities/service.entity';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { VolunteersService } from '../volunteers/volunteers.service';
import { Volunteer, VolunteerModel } from '../volunteers/entities/volunteer.entity';

@Resolver(() => Service)
export class ServicesResolver {
  constructor(private readonly servicesService: ServicesService, private volunteerService: VolunteersService) {}

  @Mutation(() => Service)
  createService(@Args('createServiceInput') createServiceInput: CreateServiceInput) {
    return this.servicesService.create(createServiceInput);
  }

  @Query(() => [Service], { name: 'services' })
  findAll() {
    let documentQuery = this.servicesService.findAll();
    return documentQuery;
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
  volunteers(@Parent() service: Service): Promise<VolunteerModel[]> {
    return this.volunteerService.findMany(service.volunteers.map(volunteer => volunteer.id));
  }
}
