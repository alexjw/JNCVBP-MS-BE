import { Injectable } from "@nestjs/common";
import { CreateCourseInput } from "./dto/create-course.input";
import { UpdateCourseInput } from "./dto/update-course.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CourseModel } from "./entities/course.entity";

@Injectable()
export class CoursesService {
  constructor(@InjectModel("Course") private model: Model<CourseModel>) {}

  create(createCourseInput: CreateCourseInput) {
    return this.model.create(createCourseInput);
  }

  findAll(disabled: boolean = false) {
    return this.model.find().where({ disabled }); /*.populate({
      path: 'details',
      populate: {
        path: 'volunteer',
        model: 'Volunteer'
      }
    });*/
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
