import { Injectable } from "@nestjs/common";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventModel } from "./entities/event.entity";
import * as moment from "moment";
const _ = require("lodash");

/**
 * EventsService is responsible for creating, retrieving, updating and deleting events from the database.
 *
 * @export
 * @class EventsService
 */
@Injectable()
export class EventsService {
  constructor(@InjectModel("Event") private model: Model<EventModel>) {}

  create(createEventInput: CreateEventInput) {
    return this.model.create(createEventInput);
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
        .where({ createdAt: { $gte: floorDate, $lte: ceilingDate } });
    } else if (searchText) {
      query.where({
        $or: [{ description: { $regex: searchText, $options: "i" } }],
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

  update(id: string, updateEventInput: UpdateEventInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateEventInput);
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false });
  }
}
