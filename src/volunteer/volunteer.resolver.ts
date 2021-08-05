import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VolunteerService } from './volunteer.service';
import { VolunteerType } from './volunteer.type';
import { CreateVolunteerInput } from './volunteer.input';
import { Volunteer } from './volunteer.model';

@Resolver('Volunteer')
export class VolunteerResolver {
  constructor(private volunteerService: VolunteerService) { }

  @Mutation(returns => VolunteerType)
  createVolunteer(@Args('createVolunteerInput') createVolunteerInput: CreateVolunteerInput): Promise<Volunteer> {
    return this.volunteerService.createVolunteer(createVolunteerInput);
  }

  @Mutation(returns => Boolean)
  deleteVolunteer(@Args('_id') _id: string) {
    return this.volunteerService.deleteVolunteer(_id).then(result => Boolean(result.deletedCount));
  }

  @Mutation(returns => VolunteerType)
  editVolunteer(@Args('_id') _id: string, @Args({name: 'name', nullable: true}) name: string) {
    return this.volunteerService.getVolunteer(_id).then(volunteer => {
      volunteer.name = name || volunteer.name;
      return volunteer.save();
    })
  }

  @Query(returns => VolunteerType)
  volunteer(@Args('_id') _id: string): Promise<Volunteer> {
    return this.volunteerService.getVolunteer(_id);
  }

  @Query(returns => [VolunteerType])
  volunteers(): Promise<Volunteer[]> {
    return this.volunteerService.getVolunteers();
  }

}
