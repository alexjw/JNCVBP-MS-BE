import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RanksService } from "./ranks.service";
import { RanksResolver } from "./ranks.resolver";
import { RankSchema } from "./entities/rank.entity";

/**
 * RanksModule is the main module for the Ranks feature.
 *
 * This module imports the necessary dependencies for the Ranks feature.
 *
 * It imports the mongoose module for their respective entity.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module RanksModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "Rank", schema: RankSchema }])],
  providers: [RanksService, RanksResolver],
  exports: [RanksService],
})
export class RanksModule {}
