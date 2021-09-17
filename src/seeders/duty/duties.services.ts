import { Injectable } from "@nestjs/common";

import { CreateDutyInput } from "src/duty/duty.input";
import { Duty } from "src/duty/duty.model";
import { DutyService } from "src/duty/duty.service";

import { duties } from "./data";

@Injectable()
export class DutySeederService {
  constructor(private dutyService: DutyService) { }

  create(): Promise<Duty>[] {
    return duties.map(async (duty: CreateDutyInput) => {
      return await
        this.dutyService
          .createDuty(duty)
          .catch(error => Promise.reject(error));
    });
  }
}