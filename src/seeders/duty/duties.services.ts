import { Injectable } from "@nestjs/common";


import { DutiesService } from 'src/duties/duties.service';
import { DutyModel } from 'src/duties/entities/duty.entity';
import { CreateDutyInput } from 'src/duties/dto/create-duty.input';

import { duties } from "./data";

@Injectable()
export class DutySeederService {
  constructor(private dutyService: DutiesService) { }

  create(): Promise<DutyModel>[] {
    return duties.map(async (duty: CreateDutyInput) => {
      return await
        this.dutyService
          .create(duty)
          .catch(error => Promise.reject(error));
    });
  }
}