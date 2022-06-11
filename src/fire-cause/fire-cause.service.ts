import { Injectable } from "@nestjs/common";
import { CreateFireCauseInput } from "./dto/create-fire-cause.input";
import { UpdateFireCauseInput } from "./dto/update-fire-cause.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FireCauseModel } from "./entities/fire-cause.entity";

@Injectable()
export class FireCauseService {
  constructor(@InjectModel("FireCause") private model: Model<FireCauseModel>) {}

  create(input: CreateFireCauseInput) {
    return this.model.create(input);
  }

  findAll(disabled = false) {
    return this.model.find().where({ disabled });
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  findMany(ids: string[]) {
    return this.model.find().where("_id").in(ids).exec();
  }

  update(id: string, updateFireCauseInput: UpdateFireCauseInput) {
    return this.model.findOneAndUpdate({ _id: id }, { updateFireCauseInput }).exec();
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  async findAllIncludingDisabled() {
    return this.model.find();
  }
}
