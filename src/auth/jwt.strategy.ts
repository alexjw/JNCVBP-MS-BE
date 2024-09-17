import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { secret } from "../utils/Constants";

/**
 * A class that implements a Passport strategy for validating JWTs.
 *
 * This class is used to validate a JWT that is sent in the Authorization header
 * of an HTTP request. The validation process involves verifying the JWT's
 * signature, checking if the JWT is expired, and extracting the user ID
 * from the JWT.
 *
 * The class extends the PassportStrategy class from the @nestjs/passport
 * package, which provides the functionality for validating the JWT.
 *
 * The class overrides the validate method of the PassportStrategy class,
 * which is called by Passport when a JWT is sent in the Authorization header
 * of an HTTP request. The validate method is responsible for validating the
 * JWT and extracting the user ID from the JWT.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * The constructor of the JwtStrategy class.
   *
   * The constructor is used to set the options for the jwt strategy.
   * The options are:
   * - jwtFromRequest: The function to extract the JWT from the request.
   * - ignoreExpiration: Whether to ignore the JWT expiration.
   * - secretOrKey: The secret or key used to decode the JWT.
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  /**
   * Validates a JWT payload.
   * @param payload The payload from the JWT.
   * @returns The user ID and username from the payload.
   */
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
