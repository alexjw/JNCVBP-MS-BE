import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Volunteer } from './volunteer.model';
import { CreateVolunteerInput } from './volunteer.input';

@Injectable()
export class VolunteerService {

  constructor(@InjectModel('Volunteer') private volunteerModel: Model<Volunteer>) { }

  getVolunteer(_id: string): Promise<Volunteer> {
    return this.volunteerModel.findById(_id).exec();
  }

  getVolunteers(): Promise<Volunteer[]> {
    return this.volunteerModel.find().exec();
  }

  createVolunteer(itemInput: CreateVolunteerInput): Promise<Volunteer> {
    return this.volunteerModel.create(itemInput);
  }

  deleteVolunteer(_id: string) {
    return this.volunteerModel.deleteOne({_id});
  }

}
