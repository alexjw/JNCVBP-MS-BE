import { AuthService } from "./auth/auth.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LoginInput } from "./auth/dto/login.input";
import { AccessToken } from "./auth/entities/access.token.entity";
import { User } from "./users/entities/user.entity";
import { GqlAuthGuard } from "./auth/gql.auth.guard";
import { Inject, Injectable, Scope, UseGuards } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { UsersService } from "./users/users.service";

/**
 * A resolver which will be used to expose the login and currentUser queries.
 * The login query will be used to authenticate users, and the currentUser query
 * will be used to get the currently logged in user.
 *
 * The class is created in the REQUEST scope, which means that it will be created
 * and destroyed with every request. This is necessary because we want to use
 * the request object to get the user from the request, and we want to make sure
 * that the user is cleared from the class after every request.
 */
@Resolver()
@Injectable({ scope: Scope.REQUEST })
export class AppResolver {
  /**
   * The constructor for the AppResolver.
   * @param authService the service which will be used to authenticate users
   * @param request the request object which will be used to get the user from the request
   * @param usersService the service which will be used to get the user from the database
   */
  constructor(
    private authService: AuthService,
    @Inject(REQUEST) private readonly request,
    private usersService: UsersService
  ) {}

  /**
   * Logs in a user and returns an access token.
   * @param loginInput the username and password of the user
   * @returns an access token which can be used to authenticate the user
   */
  @Mutation(() => AccessToken)
  login(@Args("loginInput") loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

  /**
   * Returns the user that is currently logged in.
   * @returns the user that is currently logged in, or undefined if no user is logged in
   */
  @UseGuards(GqlAuthGuard)
  @Query(() => User, { nullable: true })
  currentUser() {
    if (!this.request.req.user?.userId) return undefined;
    return this.usersService.findOne(this.request.req.user?.userId);
  }
}

export default AppResolver;
