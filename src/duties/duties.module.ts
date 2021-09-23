import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DutiesService } from './duties.service';
import { DutiesResolver } from './duties.resolver';
import { DutySchema } from './entities/duty.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Duty', schema: DutySchema }])],
  providers: [DutiesResolver, DutiesService],
  exports: [DutiesService]
})
export class DutiesModule { }
