import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginInput } from "./dto/login.input";

/**
 * Service responsible for authenticating users.
 *
 * Provides a way to log in a user using a username and a password, and
 * returns a JSON Web Token if the login is successful.
 */
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  /**
   * The function to log in a user using a username and a password
   * @param user The LoginInput object containing the username and password
   * @returns A promise resolving to an object with an access_token property
   * containing the json web token if the login is successful, undefined if not
   */
  async login(user: LoginInput) {
    const theUser = await this.usersService.findOneByUsername(user.username);

    let passwordComparison = await bcrypt.compare(user.password, theUser?.password || "");

    // TODO Create better error info if user is disabled
    if (theUser && !theUser.disabled && passwordComparison) {
      const payload = { username: user.username, sub: theUser._id };
      return { access_token: this.jwtService.sign(payload) };
    } else return { access_token: undefined };
  }
}
