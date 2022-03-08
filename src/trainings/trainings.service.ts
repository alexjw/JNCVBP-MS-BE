import { Injectable } from "@nestjs/common";
import { CreateTrainingInput } from "./dto/create-training.input";
import { UpdateTrainingInput } from "./dto/update-training.input";
import { TrainingModel } from "./entities/training.entity";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

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
    return this.model.findOneAndUpdate({ _id: id }, { updateTrainingInput }).exec();
  }

  remove(id: string) {
    return this.model.findOneAndDelete({ _id: id }).exec();
  }
}
