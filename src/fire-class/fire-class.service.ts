import { Injectable } from '@nestjs/common';
import { CreateFireClassInput } from './dto/create-fire-class.input';
import { UpdateFireClassInput } from './dto/update-fire-class.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FireClassModel } from './entities/fire-class.entity';

@Injectable()
export class FireClassService {

  constructor(@InjectModel('FireClass') private model: Model<FireClassModel>) { }

  create(input: CreateFireClassInput) {
    return this.model.create(input);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: number) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateFireClassInput: UpdateFireClassInput) {
    return this.model.findOneAndUpdate({_id: id}, { updateFireClassInput });
  }

  remove(id: string) {
    return this.model.findOneAndDelete({_id: id});
  }
}