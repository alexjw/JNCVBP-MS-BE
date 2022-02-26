import { Injectable } from "@nestjs/common";


import { FireCauseService } from 'src/fire-cause/fire-cause.service';
import { FireCauseModel } from 'src/fire-cause/entities/fire-cause.entity';
import { CreateFireCauseInput } from 'src/fire-cause/dto/create-fire-cause.input';

import { fire_causes } from "./data";

@Injectable()
export class FireCauseSeederService {
  constructor(private fireCauseService: FireCauseService) { }

  create(): Promise<FireCauseModel>[] {
    return fire_causes.map(async (fire_cause: CreateFireCauseInput) => {
      return await
        this.fireCauseService
          .create(fire_cause)
          .catch(error => Promise.reject(error));
    });
  }
}