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
    //return this.userModel.create(createUserInput);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserInput.password, salt);
    const newUser = {
      ...createUserInput,
      password: hash,
    };
    return this.userModel.create(newUser);
  }

  async signin(user: User, jwt: JwtService): Promise<any> {
    const foundUser = await this.userModel.findOne({ email: user.email }).exec();
    if (foundUser) {
      const { password } = foundUser;
      if (bcrypt.compare(user.password, password)) {
        const payload = { email: user.email };
        return {
          token: jwt.sign(payload),
        };
      }
      return new HttpException("Incorrect username or password", HttpStatus.UNAUTHORIZED);
    }
    return new HttpException("Incorrect username or password", HttpStatus.UNAUTHORIZED);
  }

  async findOneByEmail(email) {
    return await this.userModel.findOne({ email }).exec();
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

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserInput).exec();
  }

  remove(id: string) {
    return this.userModel.findOneAndUpdate({ _id: id }, { disabled: true }).exec();
  }
}
