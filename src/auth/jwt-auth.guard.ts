import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../utils/Utils";

/**
 * Class that implements a Passport strategy for validating JWTs.
 * This class is a Guard that is used to validate a JWT that is sent in the Authorization header
 * of an HTTP request. The validation process involves verifying the JWT's
 * signature, checking if the JWT is expired, and extracting the user ID
 * from the JWT.
 *
 * If a route is marked as public, the guard will allow the request to go through.
 * Otherwise, it will try to validate the JWT in the request headers.
 * If the JWT is valid, it will allow the request to go through. If it is not valid,
 * it will return a 401 Unauthorized response.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  /**
   * The constructor for the JwtAuthGuard class.
   * The reflection object is used to check if a route is public or not.
   * @param reflector The reflection object used to check if a route is public or not.
   */
  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * Checks if a route is public or not. If it is public, it allows the request to go through.
   * If it is not public, it will try to validate the JWT in the request headers.
   * If the JWT is valid, it will allow the request to go through. If it is not valid,
   * it will return a 401 Unauthorized response.
   * @param context The execution context of the request.
   * @returns A boolean indicating whether the request is allowed or not.
   */
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }
}
