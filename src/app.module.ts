import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerModule } from './volunteer/volunteer.module';

@Module({
  imports: [GraphQLModule.forRoot(
    {
      autoSchemaFile: true,
      installSubscriptionHandlers: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/jncvbpms'),
    VolunteerModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
