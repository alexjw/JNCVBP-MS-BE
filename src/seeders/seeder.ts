import { Injectable, Logger } from "@nestjs/common";

import { DutySeederService } from "./duty/duties.services";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly dutyService: DutySeederService
  ) { }

  async seed() {
    await this.duties();
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
