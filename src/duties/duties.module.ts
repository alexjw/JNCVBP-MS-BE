import { Module } from '@nestjs/common';
import { DutiesService } from './duties.service';
import { DutiesResolver } from './duties.resolver';
import { DutySchema } from './entities/duty.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Duty', schema: DutySchema }])],
  providers: [DutiesResolver, DutiesService],
  exports: [DutiesService]
})
export class DutiesModule {}
