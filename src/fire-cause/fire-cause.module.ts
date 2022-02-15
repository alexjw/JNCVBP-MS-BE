import { Module } from '@nestjs/common';
import { FireCauseService } from './fire-cause.service';
import { FireCauseResolver } from './fire-cause.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { FireCauseSchema } from './entities/fire-cause.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'FireCause', schema: FireCauseSchema}])],
  providers: [FireCauseResolver, FireCauseService],
  exports: [FireCauseService]
})
export class FireCauseModule {}
