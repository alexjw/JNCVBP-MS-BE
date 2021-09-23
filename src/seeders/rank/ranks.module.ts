import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Rank Actions
import { RankSchema } from "src/ranks/entities/rank.entity";
import { RanksResolver } from "src/ranks/ranks.resolver";
import { RanksService } from "src/ranks/ranks.service";

import { RankSeederService } from "./ranks.services";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rank', schema: RankSchema }])],
  providers: [RankSeederService, RanksResolver, RanksService],
  exports: [RankSeederService],
})
export class RankSeederModule { }