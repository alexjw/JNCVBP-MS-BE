import { Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Course } from "./courses/entities/course.entity";
import { User } from "./users/entities/user.entity";
import { GqlAuthGuard } from "./auth/gql.auth.guard";
import { CreateDutyInput } from "./duties/dto/create-duty.input";
import { LoginInput } from "./auth/dto/login.input";

@Resolver()
export class AppResolver {
  constructor(private authService: AuthService) {}

  //@UseGuards(GqlAuthGuard)
  @Query(() => User)
  login(@Args("loginInput") loginInput: LoginInput) {
    return this.authService.login(loginInput.username);
  }
}

export default AppResolver;
