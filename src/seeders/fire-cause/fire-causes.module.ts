import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Fire Causes Actions

import { FireCauseSeederService } from "./fire-causes.services";
import { FireCauseSchema } from '../../fire-cause/entities/fire-cause.entity';
import { FireCauseService } from '../../fire-cause/fire-cause.service';
import { FireCauseResolver } from '../../fire-cause/fire-cause.resolver';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'FireCause', schema: FireCauseSchema }])],
  providers: [FireCauseSeederService, FireCauseResolver, FireCauseService],
  exports: [FireCauseSeederService],
})
export class FireCauseSeederModule { }