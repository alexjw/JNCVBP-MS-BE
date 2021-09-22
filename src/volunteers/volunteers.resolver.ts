import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VolunteersService } from './volunteers.service';
import { Volunteer } from './entities/volunteer.entity';
import { CreateVolunteerInput } from './dto/create-volunteer.input';
import { UpdateVolunteerInput } from './dto/update-volunteer.input';

@Resolver(() => Volunteer)
export class VolunteersResolver {
  constructor(private readonly volunteersService: VolunteersService) {}

  @Mutation(() => Volunteer)
  createVolunteer(@Args('createVolunteerInput') createVolunteerInput: CreateVolunteerInput) {
    return this.volunteersService.create(createVolunteerInput);
  }

  @Query(() => [Volunteer], { name: 'volunteers' })
  findAll() {
    return this.volunteersService.findAll();
  }

  @Query(() => Volunteer, { name: 'volunteer' })
  findOne(@Args('id') id: string) {
    return this.volunteersService.findOne(id);
  }

  @Mutation(() => Volunteer, { name: 'updateVolunteer' })
  updateVolunteer(@Args('updateVolunteerInput') updateVolunteerInput: UpdateVolunteerInput) {
    return this.volunteersService.update(updateVolunteerInput.id, updateVolunteerInput);
  }

  @Mutation(() => Volunteer)
  removeVolunteer(@Args('id') id: string) {
    return this.volunteersService.remove(id);
  }
}
