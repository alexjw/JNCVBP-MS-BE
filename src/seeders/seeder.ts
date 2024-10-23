import { Injectable, Logger } from "@nestjs/common";

import { DutySeederService } from "./duty/duties.services";
import { FireCauseSeederService } from "./fire-cause/fire-causes.services";
import { FireClassSeederService } from "./fire-class/fire-classes.services";
import { SubTypeSeederService } from "./sub-type/sub-types.services";
import { RankSeederService } from "./rank/ranks.services";
import { VolunteerSeederService } from "./volunteer/volunteers.services";

/**
 * Seeder is responsible for seeding the database with data.
 *
 * The seeder is made up of smaller seeders, each one responsible for a single
 * entity. The seeders are:
 * - {@link DutySeederService}
 * - {@link RankSeederService}
 * - {@link FireCauseSeederService}
 * - {@link FireClassSeederService}
 * - {@link SubTypeSeederService}
 * - {@link VolunteerSeederService}
 *
 * The seeders are injected into the Seeder and then the seed method is called,
 * which calls the seed method on each of the seeders.
 */
@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly dutyService: DutySeederService,
    private readonly rankService: RankSeederService,
    private readonly fireCauseService: FireCauseSeederService,
    private readonly fireClassService: FireClassSeederService,
    private readonly subTypeService: SubTypeSeederService,
    private readonly volunteerService: VolunteerSeederService
  ) {}

  /**
   * Seed the database with all the data.
   *
   * This method is meant to be called only once, when the application is first
   * started. It will create all the necessary data for the application to run.
   *
   * @returns Promise that resolves when all the data has been seeded.
   */
  async seed() {
    const ranks = this.seedService(this.rankService.create(), "Ranks");

    await this.seedService(this.dutyService.create(), "Duties");
    await this.seedService(this.fireCauseService.create(), "Fire Causes");
    await this.seedService(this.fireClassService.create(), "Fire Classes");
    await this.seedService(this.subTypeService.create(), "Sub Types");

    // set first rank 'Captain' as volunteers rank
    ranks.then((ranks) => {
      this.seedService(this.volunteerService.create(ranks[0].id), "Volunteers");
    });
  }

  /**
   * Seeds the database with a list of models.
   *
   * @param dataModel list of models to seed the database with
   * @param serviceName name of the service for logging purposes
   */
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
