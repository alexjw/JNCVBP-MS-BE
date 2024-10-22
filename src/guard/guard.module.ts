import { Module } from "@nestjs/common";
import { GuardService } from "./guard.service";
import { GuardResolver } from "./guard.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { GuardSchema } from "./entities/guard.entity";

/**
 * GuardModule is the main module for the Guards feature.
 *
 * This module imports the necessary dependencies for the Guards feature.
 *
 * It imports the mongoose module for their respective entity and the other needed Modules.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module GuardModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "Guard", schema: GuardSchema }]), VolunteersModule],
  providers: [GuardResolver, GuardService],
  exports: [GuardService],
})
export class GuardModule {}
