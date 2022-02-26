import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Rank Actions
import { VolunteerSchema } from "src/volunteers/entities/volunteer.entity";
import { VolunteersResolver } from "src/volunteers/volunteers.resolver";
import { VolunteersService } from "src/volunteers/volunteers.service";

import { VolunteerSeederService } from "./volunteers.services";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Volunteer", schema: VolunteerSchema }])],
  providers: [VolunteerSeederService, VolunteersResolver, VolunteersService],
  exports: [VolunteerSeederService],
})
export class VolunteerSeederModule {}
