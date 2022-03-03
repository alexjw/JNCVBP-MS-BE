import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { EventsService } from "./events.service";
import { Event, EventModel } from "./entities/event.entity";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";
import { VolunteersService } from "../volunteers/volunteers.service";
import { Volunteer, VolunteerModel } from "../volunteers/entities/volunteer.entity";
import { Service } from "../services/entities/service.entity";

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService, private volunteerService: VolunteersService) {}

  @Mutation(() => Event)
  createEvent(@Args("createEventInput") createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Query(() => [Event], { name: "events" })
  findAll() {
    return this.eventsService.findAll();
  }

  @Query(() => Event, { name: "event" })
  findOne(@Args("id") id: string) {
    return this.eventsService.findOne(id);
  }

  @Mutation(() => Event)
  updateEvent(@Args("updateEventInput") updateEventInput: UpdateEventInput) {
    return this.eventsService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => Event)
  removeEvent(@Args("id") id: string) {
    return this.eventsService.remove(id);
  }

  @ResolveField(() => Volunteer)
  created_by(@Parent() event: Event): Promise<VolunteerModel | null> {
    return this.volunteerService.findOne(event.created_by?._id);
  }
}
