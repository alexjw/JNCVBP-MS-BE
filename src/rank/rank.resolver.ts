import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RankService } from './rank.service';
import { RankType } from './rank.type';
import { CreateRankInput } from './rank.input';
import { Rank } from './rank.model';

@Resolver('Rank')
export class RankResolver {
  constructor(private rankService: RankService) { }

  @Mutation(returns => RankType)
  createRank(@Args('createRankInput') createRankInput: CreateRankInput): Promise<Rank> {
    return this.rankService.createRank(createRankInput);
  }

  @Mutation(() => Boolean)
  deleteRank(@Args('_id') _id: string) {
    return this.rankService.deleteRank(_id).then(result => Boolean(result.deletedCount));
  }

  @Mutation(returns => RankType)
  editRank(
    @Args('_id') _id: string,
    @Args({ name: 'name', nullable: false }) name: string,
    @Args({ name: 'description', nullable: true }) description: string,
    @Args({ name: 'isDeletable', nullable: true }) isDeletable: boolean) {
    return this.rankService
      .getRank(_id)
      .then(rank => {
        rank.name = name || rank.name;
        rank.description = description || rank.description;
        rank.isDeletable = isDeletable || rank.isDeletable;

        return rank.save();
      })
  }

  @Query(returns => RankType)
  rank(@Args('_id') _id: string): Promise<Rank> {
    return this.rankService.getRank(_id);
  }

  @Query(returns => [RankType])
  ranks(): Promise<Rank[]> {
    return this.rankService.getRanks();
  }

}
