import { createParamDecorator, ExecutionContext, SetMetadata } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true); // decorator to make endpoint not require authentication

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user;
});
