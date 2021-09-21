import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Rank Actions
import { RankSchema } from "src/rank/rank.model";
import { RankResolver } from "src/rank/rank.resolver";
import { RankService } from "src/rank/rank.service";

import { RankSeederService } from "./ranks.services";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rank', schema: RankSchema }])],
  providers: [RankSeederService, RankResolver, RankService],
  exports: [RankSeederService],
})
export class RankSeederModule { }