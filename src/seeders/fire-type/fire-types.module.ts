import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Fire Type Actions

import { FireTypeSeederService } from "./fire-types.services";
import { FireTypeSchema } from '../../fire-type/entities/fire-type.entity';
import { FireTypeService } from '../../fire-type/fire-type.service';
import { FireTypeResolver } from '../../fire-type/fire-type.resolver';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'FireType', schema: FireTypeSchema }])],
  providers: [FireTypeSeederService, FireTypeResolver, FireTypeService],
  exports: [FireTypeSeederService],
})
export class FireTypeSeederModule { }