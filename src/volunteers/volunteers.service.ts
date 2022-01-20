import { Injectable } from '@nestjs/common';
import { CreateVolunteerInput } from './dto/create-volunteer.input';
import { UpdateVolunteerInput } from './dto/update-volunteer.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VolunteerModel } from './entities/volunteer.entity';

@Injectable()
export class VolunteersService {

  constructor(@InjectModel('Volunteer') private volunteerModel: Model<VolunteerModel>) { }

  create(createVolunteerInput: CreateVolunteerInput) {
    return this.volunteerModel.create(createVolunteerInput);
  }

  findAll() {
    return this.volunteerModel.find();
  }

  findOne(id: string) {
    return this.volunteerModel.findById(id);
  }

  findMany(ids: string[]) {
    return this.volunteerModel.find().where('_id').in(ids);
  }

  update(id: string, updateVolunteerInput: UpdateVolunteerInput) {
    return this.volunteerModel.findOneAndUpdate({_id: id}, updateVolunteerInput);
  }

  remove(id: string) {
    return this.volunteerModel.findOneAndDelete({_id: id});
  }
}
