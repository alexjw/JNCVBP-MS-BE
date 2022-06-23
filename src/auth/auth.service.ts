import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginInput } from "./dto/login.input";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  // 623bd054b1af554d7cdbbf64

  /*findOne(id: string) {
    return this.usersService.findOne("623bd054b1af554d7cdbbf64");
  }*/

  /*async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && bcrypt.compare(user.password, pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }*/

  async login(user: LoginInput) {
    const theUser = await this.usersService.findOneByUsername(user.username);
    const payload = { username: user.username, sub: theUser._id };
    const result = {
      access_token: this.jwtService.sign(payload),
    };
    return result;
  }
}
