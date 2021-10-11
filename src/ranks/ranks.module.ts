import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RanksService } from "./ranks.service";
import { RanksResolver } from './ranks.resolver';
import { RankSchema } from "./entities/rank.entity";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rank', schema: RankSchema }])],
  providers: [RanksService, RanksResolver],
  exports: [RanksService]
})

export class RanksModule { }