import { Injectable } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceModel } from './entities/service.entity';

@Injectable()
export class ServicesService {

  constructor(@InjectModel('Service') private serviceModel: Model<ServiceModel>) { }

  create(createServiceInput: CreateServiceInput) {
    return this.serviceModel.create(createServiceInput);
  }

  findAll() {
    return this.serviceModel.find();
  }

  findOne(id: string) {
    return this.serviceModel.findById(id);
  }

  update(id: string, updateServiceInput: UpdateServiceInput) {
    return this.serviceModel.findOneAndUpdate({_id: id}, updateServiceInput);
  }

  remove(id: string) {
    return this.serviceModel.findOneAndDelete({_id: id});
  }
}
