import { MiddlewareConsumer, Module, Post, RequestMethod, Request, UseGuards } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

import { ServeStaticModule } from "@nestjs/serve-static";
import { JwtModule } from "@nestjs/jwt";
import { secret } from "./utils/constants";
import { join } from "path";
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
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import AppResolver from "./app.resolver";

const config = require("../config.js");

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
    MongooseModule.forRoot(config.MONGO_DB),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: "2h" },
    }),
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
  providers: [
    AppService,
    AppResolver,
    /*{
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }*/
  ], // Global Authentication
})
export class AppModule {
  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return req.user;
  }
}
