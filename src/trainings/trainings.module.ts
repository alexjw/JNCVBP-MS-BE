import { Module } from "@nestjs/common";
import { TrainingsService } from "./trainings.service";
import { TrainingsResolver } from "./trainings.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { TrainingSchema } from "./entities/training.entity";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Training", schema: TrainingSchema }]), VolunteersModule],
  providers: [TrainingsResolver, TrainingsService],
  exports: [TrainingsService],
})
export class TrainingsModule {}
