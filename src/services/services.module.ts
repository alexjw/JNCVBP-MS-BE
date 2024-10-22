import { Module } from "@nestjs/common";
import { ServicesService } from "./services.service";
import { ServicesResolver } from "./services.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { ServiceSchema } from "./entities/service.entity";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { SubTypeModule } from "../sub-type/sub-type.module";
import { FireCauseModule } from "../fire-cause/fire-cause.module";
import { FireClassModule } from "../fire-class/fire-class.module";

/**
 * ServicesModule is the main module for the Services feature.
 *
 * This module imports the necessary dependencies for the Services feature.
 *
 * It imports the mongoose module for their respective entity and the other needed Modules.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module ServicesModule
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Service", schema: ServiceSchema }]),
    VolunteersModule,
    SubTypeModule,
    FireCauseModule,
    FireClassModule,
  ],
  providers: [ServicesResolver, ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
