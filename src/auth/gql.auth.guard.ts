import { GqlExecutionContext } from "@nestjs/graphql";
import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * Guard which uses GraphQL context to get the request object and
 * authenticate using a JWT.
 */
@Injectable()
export class GqlAuthGuard extends AuthGuard("jwt") {
  /**
   * This function is used to get the request object from the GraphQL context.
   * It is used to get the request in the AuthGuard.
   * @param context The GraphQL context.
   * @returns The request object.
   */
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
