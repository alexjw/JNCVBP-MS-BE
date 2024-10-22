import { Args, Query, Resolver } from "@nestjs/graphql";
import { ReportsService } from "./reports.service";
import { Report } from "./entities/report.entity";

/**
 * ReportsResolver is a Nest resolver that handles GraphQL queries related to reports.
 *
 * It provides a single endpoint: `report(startDate: number, endDate: number)`.
 *
 * The `report` query takes two arguments: `startDate` and `endDate`, which are numbers representing the start and end dates of the report.
 *
 * The resolver calls the `generate` method of the `ReportsService` and returns the result, which is a `Report` object.
 *
 * @see ReportsService
 */
@Resolver()
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Query(() => Report)
  report(@Args("startDate") startDate: number, @Args("endDate") endDate: number) {
    return this.reportsService.generate(startDate, endDate);
  }
}
