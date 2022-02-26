import { Injectable } from "@nestjs/common";

import { CreateVolunteerInput } from "src/volunteers/dto/create-volunteer.input";
import { VolunteerModel } from "src/volunteers/entities/volunteer.entity";
import { VolunteersService } from "src/volunteers/volunteers.service";

import { volunteers } from "./data";

@Injectable()
export class VolunteerSeederService {
  constructor(private rankService: VolunteersService) { }

  create(): Promise<VolunteerModel>[] {
    return volunteers.map(async (rank: CreateVolunteerInput) => {
      return await
        this.rankService
          .create(rank)
          .catch(error => Promise.reject(error));
    });
  }
}