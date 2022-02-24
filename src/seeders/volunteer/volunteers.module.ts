import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Rank Actions
import { VolunteerSchema } from "src/Volunteers/entities/Volunteer.entity";
import { VolunteersResolver } from "src/Volunteers/Volunteers.resolver";
import { VolunteersService } from "src/Volunteers/Volunteers.service";

import { VolunteerSeederService } from "./volunteers.services";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Volunteer', schema: VolunteerSchema }])],
  providers: [VolunteerSeederService, VolunteersResolver, VolunteersService],
  exports: [VolunteerSeederService],
})
export class VolunteerSeederModule { }