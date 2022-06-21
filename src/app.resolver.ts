import { AuthService } from "./auth/auth.service";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { LoginInput } from "./auth/dto/login.input";
import { AccessToken } from "./auth/entities/access.token.entity";

@Resolver()
export class AppResolver {
  constructor(private authService: AuthService) {}

  //@UseGuards(GqlAuthGuard)
  @Query(() => AccessToken)
  login(@Args("loginInput") loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }
}

export default AppResolver;
