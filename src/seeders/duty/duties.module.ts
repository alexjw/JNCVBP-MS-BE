import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Duty Actions

import { DutySeederService } from "./duties.services";
import { DutySchema } from '../../duties/entities/duty.entity';
import { DutiesService } from '../../duties/duties.service';
import { DutiesResolver } from '../../duties/duties.resolver';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Duty', schema: DutySchema }])],
  providers: [DutySeederService, DutiesResolver, DutiesService],
  exports: [DutySeederService],
})
export class DutySeederModule { }