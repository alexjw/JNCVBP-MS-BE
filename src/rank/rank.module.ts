import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RankSchema } from "./rank.model";
import { RankService } from "./rank.service";
import { RankResolver } from './rank.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rank', schema: RankSchema }])],
  providers: [RankService, RankResolver],
  exports: [RankService]
})

export class RankModule { }