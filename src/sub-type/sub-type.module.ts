import { Module } from "@nestjs/common";
import { SubTypeService } from "./sub-type.service";
import { SubTypeResolver } from "./sub-type.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { SubTypeSchema } from "./entities/sub-type.entity";

@Module({
  imports: [MongooseModule.forFeature([{ name: "SubType", schema: SubTypeSchema }])],
  providers: [SubTypeResolver, SubTypeService],
  exports: [SubTypeService],
})
export class SubTypeModule {}
