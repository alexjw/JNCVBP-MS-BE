import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Sub Type Actions

import { SubTypeSeederService } from "./sub-types.services";
import { SubTypeSchema } from "../../sub-type/entities/sub-type.entity";
import { SubTypeService } from "../../sub-type/sub-type.service";
import { SubTypeResolver } from "../../sub-type/sub-type.resolver";

@Module({
  imports: [MongooseModule.forFeature([{ name: "SubType", schema: SubTypeSchema }])],
  providers: [SubTypeSeederService, SubTypeResolver, SubTypeService],
  exports: [SubTypeSeederService],
})
export class SubTypeSeederModule {}
