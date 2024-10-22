import { Module } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { ReportsResolver } from "./reports.resolver";
import { ServicesModule } from "../services/services.module";
import { SubTypeModule } from "../sub-type/sub-type.module";
import { FireCauseModule } from "../fire-cause/fire-cause.module";

/**
 * ReportsModule is the main module for the Reports feature.
 *
 * This module imports the necessary dependencies for the Reports feature.
 *
 * It imports the necessary modules.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module ReportsModule
 */
@Module({
  imports: [ServicesModule, SubTypeModule, FireCauseModule],
  providers: [ReportsResolver, ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}
