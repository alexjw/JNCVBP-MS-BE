import { Injectable } from "@nestjs/common";

import { CreateRankInput } from "src/ranks/dto/create-rank.input";
import { RankModel } from "src/ranks/entities/rank.entity";
import { RanksService } from "src/ranks/ranks.service";

import { ranks } from "./data";

@Injectable()
export class RankSeederService {
  constructor(private rankService: RanksService) { }

  create(): Promise<RankModel>[] {
    return ranks.map(async (rank: CreateRankInput) => {
      return await
        this.rankService
          .create(rank)
          .catch(error => Promise.reject(error));
    });
  }
}