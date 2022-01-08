import { Module } from '@nestjs/common';
import { FireTypeService } from './fire-type.service';
import { FireTypeResolver } from './fire-type.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { FireTypeSchema } from './entities/fire-type.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'FireType', schema: FireTypeSchema}])],
  providers: [FireTypeResolver, FireTypeService],
  exports: [FireTypeService]
})
export class FireTypeModule {}
