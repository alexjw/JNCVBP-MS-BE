import { Module } from "@nestjs/common";
import { TrainingsService } from "./trainings.service";
import { TrainingsResolver } from "./trainings.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { TrainingSchema } from "./entities/training.entity";

/**
 * TrainingsModule is the main module for the Trainings feature.
 *
 * This module imports the necessary dependencies for the Trainings feature.
 *
 * It imports the mongoose module for their respective entity and the other needed Modules.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module TrainingsModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "Training", schema: TrainingSchema }]), VolunteersModule],
  providers: [TrainingsResolver, TrainingsService],
  exports: [TrainingsService],
})
export class TrainingsModule {}
