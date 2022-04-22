import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DocumentQuery, Model } from "mongoose";

import { Rank, RankModel } from "./entities/rank.entity";

import { CreateRankInput } from "./dto/create-rank.input";
import { UpdateRankInput } from "./dto/update-rank.input";

@Injectable()
export class RanksService {
  constructor(@InjectModel("Rank") private rankModel: Model<RankModel>) {}

  create(rankInput: CreateRankInput): Promise<RankModel> {
    return this.rankModel.create(rankInput);
  }

  findAll(disabled = false) {
    return this.rankModel.find().where({ disabled });
  }

  findOne(id: string) {
    return this.rankModel.findById(id).exec();
  }

  update(id: string, updateRankInput: UpdateRankInput) {
    return this.rankModel.findOneAndUpdate({ _id: id }, updateRankInput);
  }

  remove(id: string) {
    return this.rankModel.findOneAndUpdate({ _id: id }, { disabled: true });
  }
}
