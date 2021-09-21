import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { VolunteerModule } from './volunteer/volunteer.module';
import { DutyModule } from './duty/duty.module';
import { RankModule } from './rank/rank.module';

const config = require('../config.js');

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
    MongooseModule.forRoot(config.MONGO_DB),
    DutyModule,
    RankModule,
    VolunteerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
