import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersModule } from "./users/users.module";
import { DutiesModule } from "./duties/duties.module";
import { RanksModule } from "./ranks/ranks.module";
import { VolunteersModule } from "./volunteers/volunteers.module";
import { ServicesModule } from "./services/services.module";
import { SubTypeModule } from "./sub-type/sub-type.module";
import { FireCauseModule } from "./fire-cause/fire-cause.module";
import { FireClassModule } from "./fire-class/fire-class.module";
import { GuardModule } from "./guard/guard.module";
import { EventsModule } from "./events/events.module";
import { TrainingsModule } from "./trainings/trainings.module";
import { CoursesModule } from "./courses/courses.module";
import { ReportsModule } from "./reports/reports.module";
import { AuthModule } from "./auth/auth.module";

const config = require("../config.js");

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
    MongooseModule.forRoot(config.MONGO_DB),
    UsersModule,
    DutiesModule,
    RanksModule,
    ServicesModule,
    VolunteersModule,
    SubTypeModule,
    FireCauseModule,
    FireClassModule,
    GuardModule,
    EventsModule,
    TrainingsModule,
    CoursesModule,
    ReportsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
