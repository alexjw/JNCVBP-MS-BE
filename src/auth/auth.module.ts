import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { secret } from "../utils/Constants";
import { JwtStrategy } from "./jwt.strategy";

/** Provides the service to validate the user credentials and generate a JWT
 * and a strategy to validate the JWT in the requests. */
@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret,
      signOptions: { expiresIn: "60m" },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
