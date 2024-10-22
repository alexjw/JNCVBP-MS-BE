import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { DutiesService } from "./duties.service";
import { DutiesResolver } from "./duties.resolver";
import { DutySchema } from "./entities/duty.entity";

/**
 * DutiesModule is the main module for the Duties feature.
 *
 * This module imports the necessary dependencies for the Duties feature.
 *
 * It imports the mongoose module for their respective entity.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module DutiesModule
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Duty", schema: DutySchema }]), // Import the DutySchema entity
  ],
  providers: [
    DutiesResolver, // Provide the DutiesResolver class
    DutiesService, // Provide the DutiesService class
  ],
  exports: [
    DutiesService, // Export the DutiesService class
  ],
})
export class DutiesModule {}
