import { Module } from "@nestjs/common";
import { SubTypeService } from "./sub-type.service";
import { SubTypeResolver } from "./sub-type.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { SubTypeSchema } from "./entities/sub-type.entity";

/**
 * SubTypeModule is the main module for the Sub-type feature.
 *
 * This module imports the necessary dependencies for the Sub-type feature.
 *
 * It imports the mongoose module for their respective entity.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module SubTypeModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "SubType", schema: SubTypeSchema }])],
  providers: [SubTypeResolver, SubTypeService],
  exports: [SubTypeService],
})
export class SubTypeModule {}
