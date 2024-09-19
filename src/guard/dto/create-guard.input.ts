import { InputType, Field, GraphQLTimestamp } from "@nestjs/graphql";
import { OnlyIdVolunteerInput } from "../../volunteers/dto/only-id-volunteer.input";

/**
 * A class representing the input for creating a guard.
 *
 * The purpose of this class is to provide a way to validate the input
 * for the createGuard mutation, and to provide a way to automatically generate
 * the GraphQL SDL for the createGuard mutation.
 *
 * @property {number} start_time - The start time of the guard.
 *
 * @property {number} end_time - The time that the guard shift is finished.
 *
 * @property {OnlyIdVolunteerInput[]} volunteers - The volunteers in charge of the guard.
 */
@InputType()
export class CreateGuardInput {
  @Field(() => GraphQLTimestamp)
  start_time: number;

  @Field(() => GraphQLTimestamp)
  end_time: number;

  @Field(() => [OnlyIdVolunteerInput], { nullable: true })
  volunteers: OnlyIdVolunteerInput[];

  @Field({ nullable: true })
  observations: string;
}
