import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserModel } from "./entities/user.entity";
import * as moment from "moment";
const _ = require("lodash");

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private model: Model<UserModel>) {}

  async create(createUserInput: CreateUserInput) {
    let existingUserByUsername = await this.findOneByUsername(createUserInput.username);
    if (existingUserByUsername) throw new HttpException("Conflict", HttpStatus.CONFLICT);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserInput.password, salt);
    const newUser = {
      ...createUserInput,
      password: hash,
    };
    return this.model.create(newUser);
  }

  findAll(disabled = false) {
    return this.model.find().where({ disabled });
  }

  findPaginated(limit, offset, sortField, sortOrder, searchText, disabled = false) {
    const query = this.model.find().where({ disabled });

    if (searchText) {
      query.where({
        $or: [
          { firstName: { $regex: searchText, $options: "i" } },
          { lastName: { $regex: searchText, $options: "i" } },
          { username: { $regex: searchText, $options: "i" } },
          { email: { $regex: searchText, $options: "i" } },

          // TODO: Search by Admin status
        ],
      });
    }
    const countQuery = _.cloneDeep(query);
    return {
      items: query
        .sort((sortOrder === "desc" ? "-" : "") + sortField)
        .skip(offset)
        .limit(limit),
      totalSize: this.model.countDocuments(countQuery),
    };
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  findOneByUsername(username: string) {
    return this.model.findOne({ username }).exec();
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
    return this.model.findOneAndUpdate({ _id: id }, updateProperties).exec();
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true }).exec();
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false }).exec();
  }
}
