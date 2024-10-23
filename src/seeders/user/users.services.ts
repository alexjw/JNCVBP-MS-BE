import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { UserModel } from "src/users/entities/user.entity";
import { CreateUserInput } from "src/users/dto/create-user.input";
import { users } from "./data";

@Injectable()
export class UserSeederService {
  constructor(private usersService: UsersService) {}

  create(): Promise<UserModel>[] {
    return users.map(async (user: CreateUserInput) => {
      return await this.usersService.create(user).catch((error) => Promise.reject(error));
    });
  }
}
