import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginInput } from "./dto/login.input";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  async login(user: LoginInput) {
    const theUser = await this.usersService.findOneByUsername(user.username);

    // Check this, always true for password
    let passwordComparison = await bcrypt.compare(user.password, theUser?.password || "");

    // Create better error info if user is disabled
    if (theUser && !theUser.disabled && passwordComparison) {
      const payload = { username: user.username, sub: theUser._id };
      return { access_token: this.jwtService.sign(payload) };
    } else return { access_token: undefined };
  }
}
