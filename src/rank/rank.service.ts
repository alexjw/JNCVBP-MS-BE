import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRankInput } from './rank.input';

import { Rank } from './rank.model';

@Injectable()
export class RankService {
  constructor(@InjectModel('Rank') private rankModel: Model<Rank>) { };

  getRank(_id: string): Promise<Rank> {
    return this.rankModel.findById(_id).exec();
  }

  getRanks(): Promise<Rank[]> {
    return this.rankModel.find().exec();
  }

  createRank(rankInput: CreateRankInput): Promise<Rank> {
    return this.rankModel.create(rankInput);
  }

  deleteRank(_id: string) {
    return this.rankModel.deleteOne({ _id });
  }
}