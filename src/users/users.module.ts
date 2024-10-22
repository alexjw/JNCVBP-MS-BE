import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./entities/user.entity";

/**
 * UsersModule is the main module for the Users feature.
 *
 * This module imports the necessary dependencies for the Users feature.
 *
 * It imports the mongoose module for their respective entity.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module UsersModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
