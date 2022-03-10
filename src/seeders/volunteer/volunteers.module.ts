import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RanksModule } from "src/ranks/ranks.module";

// Implemented Rank Actions
import { VolunteerSchema } from "src/volunteers/entities/volunteer.entity";
import { VolunteersResolver } from "src/volunteers/volunteers.resolver";
import { VolunteersService } from "src/volunteers/volunteers.service";

import { VolunteerSeederService } from "./volunteers.services";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Volunteer", schema: VolunteerSchema }]), RanksModule],
  providers: [VolunteerSeederService, VolunteersResolver, VolunteersService],
  exports: [VolunteerSeederService],
})
export class VolunteerSeederModule {}
