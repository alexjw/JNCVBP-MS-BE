import { Module } from '@nestjs/common';
import { FireClassService } from './fire-class.service';
import { FireClassResolver } from './fire-class.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { FireClassSchema } from './entities/fire-class.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'FireClass', schema: FireClassSchema}])],
  providers: [FireClassResolver, FireClassService],
  exports: [FireClassService]

})
export class FireClassModule {}
