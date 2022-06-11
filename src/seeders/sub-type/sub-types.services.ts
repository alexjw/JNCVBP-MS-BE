import { Injectable } from "@nestjs/common";

import { SubTypeService } from "src/sub-type/sub-type.service";
import { SubTypeModel } from "src/sub-type/entities/sub-type.entity";
import { CreateSubTypeInput } from "src/sub-type/dto/create-sub-type.input";

import { sub_types } from "./data";

@Injectable()
export class SubTypeSeederService {
  constructor(private subTypeService: SubTypeService) {}

  create(): Promise<SubTypeModel>[] {
    return sub_types.map(async (subType: CreateSubTypeInput) => {
      return await this.subTypeService.create(subType).catch((error) => Promise.reject(error));
    });
  }
}
