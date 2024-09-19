import { MiddlewareConsumer, Module, Post, RequestMethod, Request, UseGuards } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

import { ServeStaticModule } from "@nestjs/serve-static";
import { JwtModule } from "@nestjs/jwt";
import { secret } from "./utils/Constants";
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

/**
 * This is the main application module.
 * It imports all of the other modules of the application and configures them.
 * It also adds the needed controllers and providers.
 * The login function is a special case, it is a local guard that logs in the user
 * and returns the user object.
 */
@Module({
  imports: [
    // We use code-first approach for GraphQL, instead of schema-first
    // This allow us to have a better control on the schema and the resolvers
    // See https://docs.nestjs.com/graphql/quick-start#code-first
    GraphQLModule.forRoot({ autoSchemaFile: true, installSubscriptionHandlers: true }),
    // This is the connection to the MongoDB database
    MongooseModule.forRoot(config.MONGO_DB),
    // Adding all of modules of the application.
    UsersModule,
    DutiesModule, // Duties is not used, TODO clean
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
  // Adding needed controllers
  controllers: [AppController],
  // Adding needed providers
  providers: [AppService, AppResolver],
})
export class AppModule {
  // This is a special case for the login function, it is a local guard that logs in the user
  // and returns the user object.
  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return req.user;
  }
}
