import { Module } from "@nestjs/common";
import { VolunteersService } from "./volunteers.service";
import { VolunteersResolver } from "./volunteers.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteerSchema } from "./entities/volunteer.entity";
import { RanksModule } from "src/ranks/ranks.module";

/**
 * VolunteersModule is the main module for the Volunteers feature.
 *
 * This module imports the necessary dependencies for the Volunteers feature.
 *
 * It imports the mongoose module for their respective entity and the other needed Modules.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module VolunteersModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "Volunteer", schema: VolunteerSchema }]), RanksModule],
  providers: [VolunteersResolver, VolunteersService],
  exports: [VolunteersService],
})
export class VolunteersModule {}
