import { Module } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { ReportsResolver } from "./reports.resolver";
import { ServicesModule } from "../services/services.module";
import { SubTypeModule } from "../sub-type/sub-type.module";
import { FireCauseModule } from "../fire-cause/fire-cause.module";

@Module({
  imports: [ServicesModule, SubTypeModule, FireCauseModule],
  providers: [ReportsResolver, ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}
