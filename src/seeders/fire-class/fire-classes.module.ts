import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Implemented Fire Classes Actions

import { FireClassSeederService } from "./fire-classes.services";
import { FireClassSchema } from '../../fire-class/entities/fire-class.entity';
import { FireClassService } from '../../fire-class/fire-class.service';
import { FireClassResolver } from '../../fire-class/fire-class.resolver';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'FireClass', schema: FireClassSchema }])],
  providers: [FireClassSeederService, FireClassResolver, FireClassService],
  exports: [FireClassSeederService],
})
export class FireClassSeederModule { }