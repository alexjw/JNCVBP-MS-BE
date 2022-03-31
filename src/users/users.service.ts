import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserModel } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private userModel: Model<UserModel>) {}

  create(createUserInput: CreateUserInput) {
    return this.userModel.create(createUserInput);
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserInput).exec();
  }

  remove(id: string) {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
