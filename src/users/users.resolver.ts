import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { PaginatedUsers } from "./dto/paginated-users";

/**
 * UsersResolver is a Nest resolver that handles GraphQL queries and mutations related to Users.
 *
 * It provides endpoints for creating, retrieving, updating and deleting Users.
 *
 * @see UsersService
 */
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => PaginatedUsers, { name: "paginatedUsers" })
  findAllPaginated(
    @Args("limit", { defaultValue: 10 }) limit: number,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("sortField", { defaultValue: "id" }) sortField: string,
    @Args("sortOrder", { defaultValue: "desc" }) sortOrder: string,
    @Args("searchText", { defaultValue: "" }) searchText: string,
    @Args("disabled", { defaultValue: false }) disabled: boolean
  ) {
    return this.usersService.findPaginated(limit, offset, sortField, sortOrder, searchText, disabled);
  }

  @Query(() => [User])
  usersDisabled() {
    return this.usersService.findAll(true);
  }

  @Query(() => User, { name: "user" })
  findOne(@Args("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args("id") id: string) {
    return this.usersService.remove(id);
  }

  @Mutation(() => User)
  restoreUser(@Args("id") id: string) {
    return this.usersService.restore(id);
  }
}
