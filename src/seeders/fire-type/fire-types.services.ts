import { Injectable } from "@nestjs/common";


import { FireTypeService } from 'src/fire-type/fire-type.service';
import { FireTypeModel } from 'src/fire-type/entities/fire-type.entity';
import { CreateFireTypeInput } from 'src/fire-type/dto/create-fire-type.input';

import { fire_types } from "./data";

@Injectable()
export class FireTypeSeederService {
  constructor(private fireCauseService: FireTypeService) { }

  create(): Promise<FireTypeModel>[] {
    return fire_types.map(async (fire_cause: CreateFireTypeInput) => {
      return await
        this.fireCauseService
          .create(fire_cause)
          .catch(error => Promise.reject(error));
    });
  }
}