import { Logger, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";

import { DutySeederModule } from "./duty/duties.module";
import { FireCauseSeederModule } from "./fire-cause/fire-causes.module";
import { FireClassSeederModule } from "./fire-class/fire-classes.module";
import { SubTypeSeederModule } from "./sub-type/sub-types.module";
import { RankSeederModule } from "./rank/ranks.module";
import { VolunteerSeederModule } from "./volunteer/volunteers.module";

import { Seeder } from "./seeder";

const config = require("../../config.js");

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
    MongooseModule.forRoot(config.MONGO_DB),
    DutySeederModule,
    FireCauseSeederModule,
    FireClassSeederModule,
    SubTypeSeederModule,
    RankSeederModule,
    VolunteerSeederModule,
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}
