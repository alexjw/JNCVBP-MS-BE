import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { VolunteerModule } from './volunteer/volunteer.module';
import { UsersModule } from './users/users.module';
import { DutiesModule } from './duties/duties.module';

const config = require('../config.js');

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
    MongooseModule.forRoot(config.MONGO_DB),
    VolunteerModule,
    UsersModule,
    DutiesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
