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
import { UserSeederModule } from "./user/users.module";

const config = require("../../config.js");

/**
 * SeederModule is the main module for the seeders.
 *
 * This module imports the necessary dependencies for the seeders.
 *
 * It imports the mongoose module for the database and the GraphQLModule to create the GraphQL schema.
 * It provides the Seeder service, which is able to seed the database with the data from the seeders.
 *
 * @module SeederModule
 */
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
    UserSeederModule,
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}
