import { Injectable } from "@nestjs/common";
import { CreateGuardInput } from "./dto/create-guard.input";
import { UpdateGuardInput } from "./dto/update-guard.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GuardModel } from "./entities/guard.entity";
import * as moment from "moment";
const _ = require("lodash");

/**
 * GuardService is responsible for creating, retrieving, updating and deleting Guards from the database.
 *
 * @export
 * @class GuardService
 */
@Injectable()
export class GuardService {
  constructor(@InjectModel("Guard") private model: Model<GuardModel>) {}

  create(createGuardInput: CreateGuardInput) {
    return this.model.create(createGuardInput);
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
      query
        // Manually customizing search fields
        .where({
          $or: [
            { start_time: { $gte: floorDate, $lte: ceilingDate } },
            { end_time: { $gte: floorDate, $lte: ceilingDate } },
          ],
        });
    } else if (searchText) {
      query.where({
        $or: [{ observations: { $regex: searchText, $options: "i" } }],
      });
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

  update(id: string, updateGuardInput: UpdateGuardInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateGuardInput);
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false });
  }

  findCurrent() {
    const currentTime = new Date();
    return this.model.findOne().where({
      $and: [{ start_time: { $lte: currentTime } }, { end_time: { $gte: currentTime } }, { disabled: false }],
    });
  }

  findNext() {
    const currentTime = new Date();
    return this.model
      .findOne()
      .where({ $and: [{ start_time: { $gte: currentTime } }, { disabled: false }] })
      .sort({ start_time: -1 })
      .limit(1);
  }
}
