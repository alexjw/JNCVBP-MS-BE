import { Injectable } from '@nestjs/common';
import { CreateDutyInput } from './dto/create-duty.input';
import { UpdateDutyInput } from './dto/update-duty.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DutyModel } from './entities/duty.entity';

@Injectable()
export class DutiesService {

  constructor(@InjectModel('Duty') private dutyModel: Model<DutyModel>) { }

  create(createDutyInput: CreateDutyInput) {
    return this.dutyModel.create(createDutyInput);
  }

  findAll() {
    return this.dutyModel.find().exec();
  }

  findOne(id: string) {
    return this.dutyModel.findById(id).exec();
  }

  update(id: string, updateDutyInput: UpdateDutyInput) {
    return this.dutyModel.updateOne({_id: id}, updateDutyInput);
  }

  remove(id: string) {
    return this.dutyModel.deleteOne({_id: id});
  }
}
