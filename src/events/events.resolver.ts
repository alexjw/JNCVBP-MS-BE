import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { EventsService } from "./events.service";
import { Event, EventModel } from "./entities/event.entity";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";
import { User } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
import { PaginatedEvents } from "./dto/paginated-events";

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService, private usersService: UsersService) {}

  @Mutation(() => Event)
  createEvent(@Args("createEventInput") createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Query(() => [Event], { name: "events" })
  findAll() {
    return this.eventsService.findAll();
  }

  @Query(() => PaginatedEvents, { name: "paginatedEvents" })
  findAllPaginated(
    @Args("limit", { defaultValue: 10 }) limit: number,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("sortField", { defaultValue: "id" }) sortField: string,
    @Args("sortOrder", { defaultValue: "desc" }) sortOrder: string,
    @Args("searchText", { defaultValue: "" }) searchText: string
  ) {
    return this.eventsService.findPaginated(limit, offset, sortField, sortOrder, searchText);
  }

  @Query(() => [Event])
  eventsDisabled() {
    return this.eventsService.findAll(true);
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

  @Mutation(() => Event)
  restoreEvent(@Args("id") id: string) {
    return this.eventsService.restore(id);
  }

  @ResolveField(() => User)
  created_by(@Parent() event: EventModel) {
    return this.usersService.findOne(event.created_by?._id?.toString());
  }
}
