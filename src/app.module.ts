import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { DutiesModule } from './duties/duties.module';
import { RanksModule } from './ranks/ranks.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { ServicesModule } from './services/services.module';
import { FireTypeModule } from './fire-type/fire-type.module';

const config = require('../config.js');

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
    MongooseModule.forRoot(config.MONGO_DB),
    UsersModule,
    DutiesModule,
    RanksModule,
    ServicesModule,
    VolunteersModule,
    FireTypeModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
