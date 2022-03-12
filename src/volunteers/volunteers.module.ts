import { Module } from "@nestjs/common";
import { VolunteersService } from "./volunteers.service";
import { VolunteersResolver } from "./volunteers.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteerSchema } from "./entities/volunteer.entity";
import { RanksModule } from "src/ranks/ranks.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Volunteer", schema: VolunteerSchema }]), RanksModule],
  providers: [VolunteersResolver, VolunteersService],
  exports: [VolunteersService],
})
export class VolunteersModule {}
