import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsResolver } from "./events.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { EventSchema } from "./entities/event.entity";
import { UsersModule } from "../users/users.module";

/**
 * EventsModule is the main module for the Events feature.
 *
 * This module imports the necessary dependencies for the Events feature.
 *
 * It imports the mongoose module for their respective entity and the other needed Modules.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module EventsModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "Event", schema: EventSchema }]), UsersModule],
  providers: [EventsResolver, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
