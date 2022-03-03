import { Injectable } from "@nestjs/common";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventModel } from "./entities/event.entity";

@Injectable()
export class EventsService {
  constructor(@InjectModel("Event") private model: Model<EventModel>) {}

  create(createEventInput: CreateEventInput) {
    return this.model.create(createEventInput);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateEventInput: UpdateEventInput) {
    return this.model.findOneAndUpdate({ _id: id }, { updateEventInput }).exec();
  }

  remove(id: string) {
    return this.model.findOneAndDelete({ _id: id }).exec();
  }
}
