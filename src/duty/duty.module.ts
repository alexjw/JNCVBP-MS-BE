import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DutySchema } from "./duty.model";
import { DutyService } from "./duty.service";
import { DutyResolver } from './duty.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Duty', schema: DutySchema }])],
  providers: [DutyService, DutyResolver],
  exports: [DutyService]
})

export class DutyModule { }