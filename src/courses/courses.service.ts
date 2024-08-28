import { Injectable } from "@nestjs/common";
import { CreateCourseInput } from "./dto/create-course.input";
import { UpdateCourseInput } from "./dto/update-course.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CourseModel } from "./entities/course.entity";
import * as moment from "moment";
const _ = require("lodash");

@Injectable()
export class CoursesService {
  constructor(@InjectModel("Course") private model: Model<CourseModel>) {}

  create(createCourseInput: CreateCourseInput) {
    return this.model.create(createCourseInput);
  }

  findAll(disabled: boolean = false) {
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

  update(id: string, updateCourseInput: UpdateCourseInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateCourseInput);
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false });
  }
}
