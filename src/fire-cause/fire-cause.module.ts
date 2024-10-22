import { Module } from "@nestjs/common";
import { FireCauseService } from "./fire-cause.service";
import { FireCauseResolver } from "./fire-cause.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { FireCauseSchema } from "./entities/fire-cause.entity";

/**
 * FireCauseModule is the main module for the Fire-Causes feature.
 *
 * This module imports the necessary dependencies for the Fire-Causes feature.
 *
 * It imports the mongoose module for their respective entity.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module FireCauseModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "FireCause", schema: FireCauseSchema }])],
  providers: [FireCauseResolver, FireCauseService],
  exports: [FireCauseService],
})
export class FireCauseModule {}
