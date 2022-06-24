import { AuthService } from "./auth/auth.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LoginInput } from "./auth/dto/login.input";
import { AccessToken } from "./auth/entities/access.token.entity";
import { User } from "./users/entities/user.entity";
import { GqlAuthGuard } from "./auth/gql.auth.guard";
import { Inject, Injectable, Scope, UseGuards } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { UsersService } from "./users/users.service";

@Resolver()
@Injectable({ scope: Scope.REQUEST })
export class AppResolver {
  constructor(
    private authService: AuthService,
    @Inject(REQUEST) private readonly request,
    private usersService: UsersService
  ) {}

  //@UseGuards(GqlAuthGuard)
  @Mutation(() => AccessToken)
  login(@Args("loginInput") loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  currentUser() {
    // do some checks
    if (!this.request.req.user?.userId) return undefined;
    return this.usersService.findOne(this.request.req.user?.userId);
  }
}

export default AppResolver;
