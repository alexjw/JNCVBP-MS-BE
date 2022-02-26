import { Module } from "@nestjs/common";
import { GuardService } from "./guard.service";
import { GuardResolver } from "./guard.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { GuardSchema } from "./entities/guard.entity";
@Module({
  imports: [MongooseModule.forFeature([{ name: "Guard", schema: GuardSchema }]), VolunteersModule],
  providers: [GuardResolver, GuardService],
  exports: [GuardService],
})
export class GuardModule {}
