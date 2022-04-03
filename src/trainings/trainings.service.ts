import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateTrainingInput } from "./dto/create-training.input";
import { UpdateTrainingInput } from "./dto/update-training.input";
import { TrainingModel } from "./entities/training.entity";

@Injectable()
export class TrainingsService {
  constructor(@InjectModel("Training") private model: Model<TrainingModel>) {}

  create(createTrainingInput: CreateTrainingInput) {
    return this.model.create(createTrainingInput);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateTrainingInput: UpdateTrainingInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateTrainingInput);
  }

  remove(id: string) {
    return this.model.findOneAndDelete({ _id: id }).exec();
  }
}
