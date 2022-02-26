import { Injectable } from "@nestjs/common";


import { FireClassService } from 'src/fire-class/fire-class.service';
import { FireClassModel } from 'src/fire-class/entities/fire-class.entity';
import { CreateFireClassInput } from 'src/fire-class/dto/create-fire-class.input';

import { fire_classes } from "./data";

@Injectable()
export class FireClassSeederService {
  constructor(private fireCauseService: FireClassService) { }

  create(): Promise<FireClassModel>[] {
    return fire_classes.map(async (fire_class: CreateFireClassInput) => {
      return await
        this.fireCauseService
          .create(fire_class)
          .catch(error => Promise.reject(error));
    });
  }
}