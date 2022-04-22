import { Injectable } from "@nestjs/common";
import { CreateFireClassInput } from "./dto/create-fire-class.input";
import { UpdateFireClassInput } from "./dto/update-fire-class.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FireClassModel } from "./entities/fire-class.entity";

@Injectable()
export class FireClassService {
  constructor(@InjectModel("FireClass") private model: Model<FireClassModel>) {}

  create(input: CreateFireClassInput) {
    return this.model.create(input);
  }

  findAll(disabled = true) {
    return this.model.find().where({ disabled });
  }

  findOne(id: number) {
    return this.model.findById(id).exec();
  }

  findMany(ids: string[]) {
    return this.model.find().where("_id").in(ids).exec();
  }

  update(id: string, updateFireClassInput: UpdateFireClassInput) {
    return this.model.findOneAndUpdate({ _id: id }, { updateFireClassInput });
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }
}
