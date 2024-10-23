import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/users/entities/user.entity";
import { UserSeederService } from "./users.services";
import { UsersResolver } from "src/users/users.resolver";
import { UsersService } from "src/users/users.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  providers: [UserSeederService, UsersResolver, UsersService],
  exports: [UserSeederService],
})
export class UserSeederModule {}
