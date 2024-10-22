import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateTrainingInput } from "./dto/create-training.input";
import { UpdateTrainingInput } from "./dto/update-training.input";
import { TrainingModel } from "./entities/training.entity";
import * as moment from "moment";
const _ = require("lodash");

/**
 * TrainingsService is responsible for creating, retrieving, updating and deleting Trainings from the database.
 *
 * @export
 * @class TrainingsService
 */
@Injectable()
export class TrainingsService {
  constructor(@InjectModel("Training") private model: Model<TrainingModel>) {}

  create(createTrainingInput: CreateTrainingInput) {
    return this.model.create(createTrainingInput);
  }

  findAll(disabled = false) {
    return this.model.find().where({ disabled });
  }

  findPaginated(limit, offset, sortField, sortOrder, searchText, disabled = false) {
    const searchIsValidDate = moment(searchText, "DD/MM/YYYY", true).isValid();

    const query = this.model.find().where({ disabled });

    if (searchIsValidDate) {
      const floorDate = moment.utc(searchText, "DD/MM/YYYY", true);
      const ceilingDate = moment.utc(searchText, "DD/MM/YYYY", true);
      ceilingDate.set({ second: 59, minute: 59, hour: 23 });
      query.where({ date: { $gte: floorDate, $lte: ceilingDate } });
    } else if (searchText) {
      query.where({ description: { $regex: searchText, $options: "i" } });
    }
    const countQuery = _.cloneDeep(query);
    return {
      items: query
        .sort((sortOrder === "desc" ? "-" : "") + sortField)
        .skip(offset)
        .limit(limit),
      totalSize: this.model.countDocuments(countQuery),
    };
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateTrainingInput: UpdateTrainingInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateTrainingInput);
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false });
  }
}
