import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Volunteer')
export class VolunteerType {

  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

}
