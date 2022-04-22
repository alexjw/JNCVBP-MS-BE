import { Injectable } from "@nestjs/common";
import { CreateFireTypeInput } from "./dto/create-fire-type.input";
import { UpdateFireTypeInput } from "./dto/update-fire-type.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FireTypeModel } from "./entities/fire-type.entity";

@Injectable()
export class FireTypeService {
  constructor(@InjectModel("FireType") private model: Model<FireTypeModel>) {}

  create(input: CreateFireTypeInput) {
    return this.model.create(input);
  }

  findAll(disabled = false) {
    return this.model.find().where({ disabled });
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateFireTypeInput: UpdateFireTypeInput) {
    return this.model.findOneAndUpdate({ _id: id }, { updateFireTypeInput });
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }
}
