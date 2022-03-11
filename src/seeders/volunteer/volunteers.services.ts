import { Injectable } from "@nestjs/common";

import { CreateVolunteerInput } from "src/volunteers/dto/create-volunteer.input";
import { VolunteerModel } from "src/volunteers/entities/volunteer.entity";
import { VolunteersService } from "src/volunteers/volunteers.service";

import { volunteers } from "./data";

@Injectable()
export class VolunteerSeederService {
  constructor(private volunteerService: VolunteersService) {}

  create(rank_id): Promise<VolunteerModel>[] {
    return volunteers.map(async (volunteer: CreateVolunteerInput) => {
      volunteer.rank = { _id: rank_id };
      return await this.volunteerService.create(volunteer).catch((error) => Promise.reject(error));
    });
  }
}
