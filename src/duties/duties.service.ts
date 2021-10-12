import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { DutyModel } from './entities/duty.entity';

import { CreateDutyInput } from './dto/create-duty.input';
import { UpdateDutyInput } from './dto/update-duty.input';


@Injectable()
export class DutiesService {

  constructor(@InjectModel('Duty') private dutyModel: Model<DutyModel>) { }

  create(createDutyInput: CreateDutyInput) {
    return this.dutyModel.create(createDutyInput);
  }

  findAll() {
    return this.dutyModel.find();
  }

  findOne(id: string) {
    return this.dutyModel.findById(id);
  }

  update(id: string, updateDutyInput: UpdateDutyInput) {
    return this.dutyModel.findOneAndUpdate({ _id: id }, updateDutyInput);
  }

  remove(id: string) {
    return this.dutyModel.findOneAndDelete({ _id: id });
  }
}
