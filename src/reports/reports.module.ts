import { Module } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { ReportsResolver } from "./reports.resolver";
import { ServicesModule } from "../services/services.module";

@Module({
  imports: [ServicesModule],
  providers: [ReportsResolver, ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}
