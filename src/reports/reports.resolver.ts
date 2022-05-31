import { Args, Query, Resolver } from "@nestjs/graphql";
import { ReportsService } from "./reports.service";
import { Report } from "./entities/report.entity";

@Resolver()
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Query(() => Report)
  report(@Args("startDate") startDate: number, @Args("endDate") endDate: number) {
    return this.reportsService.generate(startDate, endDate);
  }
}
