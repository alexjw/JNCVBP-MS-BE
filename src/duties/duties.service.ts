import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { DutyModel } from "./entities/duty.entity";

import { CreateDutyInput } from "./dto/create-duty.input";
import { UpdateDutyInput } from "./dto/update-duty.input";

/**
 * DutiesService is responsible for creating, retrieving, updating and deleting duties from the database.
 *
 * @export
 * @class DutiesService
 */
@Injectable()
export class DutiesService {
  constructor(@InjectModel("Duty") private dutyModel: Model<DutyModel>) {}

  create(createDutyInput: CreateDutyInput) {
    return this.dutyModel.create(createDutyInput);
  }

  findAll(disabled = false) {
    return this.dutyModel.find().where({ disabled });
  }

  findOne(id: string) {
    return this.dutyModel.findById(id);
  }

  update(id: string, updateDutyInput: UpdateDutyInput) {
    return this.dutyModel.findOneAndUpdate({ _id: id }, updateDutyInput);
  }

  remove(id: string) {
    return this.dutyModel.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.dutyModel.findOneAndUpdate({ _id: id }, { disabled: false });
  }
}
