import { Module } from "@nestjs/common";
import { FireClassService } from "./fire-class.service";
import { FireClassResolver } from "./fire-class.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { FireClassSchema } from "./entities/fire-class.entity";

/**
 * FireClassModule is the main module for the Fire-Classes feature.
 *
 * This module imports the necessary dependencies for the Fire-Classes feature.
 *
 * It imports the mongoose module for their respective entity.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module FireClassModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "FireClass", schema: FireClassSchema }])],
  providers: [FireClassResolver, FireClassService],
  exports: [FireClassService],
})
export class FireClassModule {}
