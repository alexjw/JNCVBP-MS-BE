import { Injectable } from "@nestjs/common";
import { CreateServiceInput } from "./dto/create-service.input";
import { UpdateServiceInput } from "./dto/update-service.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ServiceModel } from "./entities/service.entity";
import * as moment from "moment";
const _ = require("lodash");

/**
 * ServicesService is responsible for creating, retrieving, updating and deleting Services from the database.
 *
 * @export
 * @class ServicesService
 */
@Injectable()
export class ServicesService {
  constructor(@InjectModel("Service") private model: Model<ServiceModel>) {}

  create(createServiceInput: CreateServiceInput) {
    return this.model.create(createServiceInput);
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
        .where({ date: { $gte: floorDate, $lte: ceilingDate } });
    } else if (searchText) {
      query.where({
        $or: [
          { locality: { $regex: searchText, $options: "i" } },
          { type: { $regex: searchText, $options: "i" } },
          { address: { $regex: searchText, $options: "i" } },
          { alerted_by: { $regex: searchText, $options: "i" } },
        ],
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

  findAllBetween(startDate: Date, endDate: Date) {
    return this.model.find({
      date: {
        $gte: startDate,
        $lte: endDate,
      },
      disabled: false,
    });
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateServiceInput: UpdateServiceInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateServiceInput);
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false });
  }
}
