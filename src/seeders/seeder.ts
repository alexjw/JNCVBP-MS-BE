import { Injectable, Logger } from "@nestjs/common";

import { DutySeederService } from "./duty/duties.services";
import { FireCauseSeederService } from "./fire-cause/fire-causes.services";
import { FireClassSeederService } from "./fire-class/fire-classes.services";
import { FireTypeSeederService } from "./fire-type/fire-types.services";
import { RankSeederService } from "./rank/ranks.services";
import { VolunteerSeederService } from "./volunteer/volunteers.services";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly dutyService: DutySeederService,
    private readonly rankService: RankSeederService,
    private readonly fireCauseService: FireCauseSeederService,
    private readonly fireClassService: FireClassSeederService,
    private readonly fireTypeService: FireTypeSeederService,
    private readonly volunteerService: VolunteerSeederService
  ) {}

  async seed() {
    const ranks = this.seedService(this.rankService.create(), "Ranks");

    await this.seedService(this.dutyService.create(), "Duties");
    await this.seedService(this.fireCauseService.create(), "Fire Causes");
    await this.seedService(this.fireClassService.create(), "Fire Classes");
    await this.seedService(this.fireTypeService.create(), "Fire Types");

    // set first rank 'Captain' as volunteers rank
    ranks.then((ranks) => {
      this.seedService(this.volunteerService.create(ranks[0].id), "Volunteers");
    });
  }

  async seedService(dataModel, serviceName) {
    return await Promise.all(dataModel)
      .then((completed) => {
        this.logger.debug(`Successfuly completed seeding ${serviceName}...`);
        return Promise.resolve(completed);
      })
      .catch((error) => {
        Promise.reject(error);
      });
  }
}
