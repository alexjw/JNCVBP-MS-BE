import { Injectable } from "@nestjs/common";


import { duties } from "./data";
import { DutiesService } from '../../duties/duties.service';
import { DutyModel } from '../../duties/entities/duty.entity';
import { CreateDutyInput } from '../../duties/dto/create-duty.input';

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