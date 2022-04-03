import { Injectable } from "@nestjs/common";
import { CreateGuardInput } from "./dto/create-guard.input";
import { UpdateGuardInput } from "./dto/update-guard.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GuardModel } from "./entities/guard.entity";

@Injectable()
export class GuardService {
  constructor(@InjectModel("Guard") private model: Model<GuardModel>) {}

  create(createGuardInput: CreateGuardInput) {
    return this.model.create(createGuardInput);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateGuardInput: UpdateGuardInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateGuardInput);
  }

  remove(id: string) {
    return this.model.findOneAndDelete({ _id: id }).exec();
  }
}
