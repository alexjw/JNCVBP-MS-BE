import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDutyInput } from './duty.input';

import { Duty } from './duty.model';

@Injectable()
export class DutyService {
  constructor(@InjectModel('Duty') private dutyModel: Model<Duty>) { };

  getDuty(_id: string): Promise<Duty> {
    return this.dutyModel.findById(_id).exec();
  }

  getDuties(): Promise<Duty[]> {
    return this.dutyModel.find().exec();
  }

  createDuty(dutyInput: CreateDutyInput): Promise<Duty> {
    return this.dutyModel.create(dutyInput);
  }

  deleteDuty(_id: string) {
    return this.dutyModel.deleteOne({ _id });
  }
}