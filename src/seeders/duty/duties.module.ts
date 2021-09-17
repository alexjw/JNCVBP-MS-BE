import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Duty Actions
import { DutySchema } from "src/duty/duty.model";
import { DutyResolver } from "src/duty/duty.resolver";
import { DutyService } from "src/duty/duty.service";

import { DutySeederService } from "./duties.services";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Duty', schema: DutySchema }])],
  providers: [DutySeederService, DutyResolver, DutyService],
  exports: [DutySeederService],
})
export class DutySeederModule { }