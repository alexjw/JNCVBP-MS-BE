import { Injectable } from "@nestjs/common";
import { CreateVolunteerInput } from "./dto/create-volunteer.input";
import { UpdateVolunteerInput } from "./dto/update-volunteer.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VolunteerModel } from "./entities/volunteer.entity";
const _ = require("lodash");
import * as moment from "moment/moment";

@Injectable()
export class VolunteersService {
  constructor(@InjectModel("Volunteer") private model: Model<VolunteerModel>) {}

  create(createVolunteerInput: CreateVolunteerInput) {
    return this.model.create(createVolunteerInput);
  }

  findAll(disabled = false) {
    return this.model.find().where({ disabled }).exec();
  }

  findPaginated(limit, offset, sortField, sortOrder, searchText, disabled = false) {
    const query = this.model.find().populate({ path: "rank.id", model: "Rank" }).where({ disabled });

    const searchIsValidDate = moment(searchText, "DD/MM/YYYY", true).isValid();

    if (searchIsValidDate) {
      const floorDate = moment.utc(searchText, "DD/MM/YYYY", true);
      const ceilingDate = moment.utc(searchText, "DD/MM/YYYY", true);
      ceilingDate.set({ second: 59, minute: 59, hour: 23 });
      query
        // Manually customizing search fields
        .where({ incorporation_date: { $gte: floorDate, $lte: ceilingDate } });
    } else if (searchText) {
      query.where({
        $or: [
          { name: { $regex: searchText, $options: "i" } },
          { code: { $regex: searchText, $options: "i" } },
          { status: { $regex: searchText, $options: "i" } },
          { blood_type: { $regex: searchText, $options: "i" } },
          // Search by Rank pending
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

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  findMany(ids: string[]) {
    return this.model.find().where("_id").in(ids).exec();
  }

  update(id: string, updateVolunteerInput: UpdateVolunteerInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateVolunteerInput);
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false });
  }
}
