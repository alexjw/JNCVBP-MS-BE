import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerSchema } from './volunteer.model';
import { VolunteerService } from './volunteer.service';
import { VolunteerResolver } from './volunteer.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Volunteer', schema: VolunteerSchema}])],
  providers: [VolunteerService, VolunteerResolver],
  exports: [VolunteerService]
})

export class VolunteerModule {}
