import { Injectable } from "@nestjs/common";

import { CreateRankInput } from "src/rank/rank.input";
import { Rank } from "src/rank/rank.model";
import { RankService } from "src/rank/rank.service";

import { ranks } from "./data";

@Injectable()
export class RankSeederService {
  constructor(private rankService: RankService) { }

  create(): Promise<Rank>[] {
    return ranks.map(async (rank: CreateRankInput) => {
      return await
        this.rankService
          .createRank(rank)
          .catch(error => Promise.reject(error));
    });
  }
}