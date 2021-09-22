import { Module } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';
import { VolunteersResolver } from './volunteers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerSchema } from './entities/volunteer.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Volunteer', schema: VolunteerSchema}])],
  providers: [VolunteersResolver, VolunteersService],
  exports: [VolunteersService]
})
export class VolunteersModule {}
