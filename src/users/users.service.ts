import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserModel } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private userModel: Model<UserModel>) {}

  async create(createUserInput: CreateUserInput) {
    let existingUserByUsername = await this.findOneByUsername(createUserInput.username);
    if (existingUserByUsername) throw new HttpException("Conflict", HttpStatus.CONFLICT);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserInput.password, salt);
    const newUser = {
      ...createUserInput,
      password: hash,
    };
    return this.userModel.create(newUser);
  }

  findAll(disabled = false) {
    return this.userModel.find().where({ disabled });
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  findOneByUsername(username: string) {
    return this.userModel.findOne({ username }).exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    let existingUserByUsername = await this.findOneByUsername(updateUserInput.username);
    if (existingUserByUsername && existingUserByUsername._id + "" !== id)
      throw new HttpException("Conflict", HttpStatus.CONFLICT);
    let updateProperties = { ...updateUserInput };
    if (updateUserInput.password) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(updateProperties.password, salt);
      updateProperties.password = hash;
    } else delete updateProperties.password;
    return this.userModel.findOneAndUpdate({ _id: id }, updateProperties).exec();
  }

  remove(id: string) {
    return this.userModel.findOneAndUpdate({ _id: id }, { disabled: true }).exec();
  }

  restore(id: string) {
    return this.userModel.findOneAndUpdate({ _id: id }, { disabled: false }).exec();
  }
}
