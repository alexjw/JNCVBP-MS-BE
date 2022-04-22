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

  findAll(disabled = true) {
    return this.userModel.find().where({ disabled });
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserInput);
  }

  remove(id: string) {
    return this.userModel.findOneAndUpdate({ _id: id }, { disabled: true });
  }
}
