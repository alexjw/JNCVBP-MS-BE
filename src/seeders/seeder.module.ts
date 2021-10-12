import { Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { DutySeederModule } from "./duty/duties.module";
import { RankSeederModule } from "./rank/ranks.module";

import { Seeder } from "./seeder";

const config = require('../../config.js');

@Module({
  imports:
    [
      GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
      MongooseModule.forRoot(config.MONGO_DB),
      DutySeederModule, RankSeederModule
    ],
  providers: [Logger, Seeder],
})
export class SeederModule { }