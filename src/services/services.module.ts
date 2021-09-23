import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesResolver } from './services.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './entities/service.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Service', schema: ServiceSchema}])],
  providers: [ServicesResolver, ServicesService],
  exports: [ServicesService]
})
export class ServicesModule {}
