import { Injectable, Logger } from "@nestjs/common";

import { DutySeederService } from "./duty/duties.services";
import { RankSeederService } from "./rank/ranks.services";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly dutyService: DutySeederService,
    private readonly rankService: RankSeederService
  ) { }

  async seed() {
    await this.duties();
    await this.ranks();
  }

  async ranks() {
    return await Promise.all(this.rankService.create())
      .then(completed => {
        this.logger.debug('Successfuly completed seeding ranks...');
        Promise.resolve(completed);
      })
      .catch(error => {
        Promise.reject(error);
      });
  }

  async duties() {
    return await Promise.all(this.dutyService.create())
      .then(completed => {
        this.logger.debug('Successfuly completed seeding duties...');
        Promise.resolve(completed);
      })
      .catch(error => {
        Promise.reject(error);
      });
  }
}
