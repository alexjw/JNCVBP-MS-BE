import { Injectable } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceModel } from './entities/service.entity';

@Injectable()
export class ServicesService {

  constructor(@InjectModel('Service') private model: Model<ServiceModel>) { }

  create(createServiceInput: CreateServiceInput) {
    console.log(createServiceInput);
    return this.model.create(createServiceInput);
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateServiceInput: UpdateServiceInput) {
    return this.model.findOneAndUpdate({_id: id}, { updateServiceInput }).exec();
  }

  remove(id: string) {
    return this.model.findOneAndDelete({_id: id}).exec();
  }
}
