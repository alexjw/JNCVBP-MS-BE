import { Injectable } from "@nestjs/common";
import moment from "moment";
import { Report } from "./entities/report.entity";

@Injectable()
export class ReportsService {
  generate(startDate: number, endDate: number): Report[] {
    //const startDateMoment = moment(startDate);
    //const endDateMoment = moment(endDate);

    const report: Report = new Report();
    report.date = 1653368398914;
    const result = [];
    result.push(report);
    return result;
  }
}
