import { CreateServiceInput } from "./create-service.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

/**
 * GraphQL input type for updating a Service.
 */
@InputType()
export class UpdateServiceInput extends PartialType(CreateServiceInput) {
  @Field()
  id: string;
}
