import { Injectable } from "@nestjs/common";
import moment from "moment";
import { Report } from "./entities/report.entity";
import { ServicesService } from "../services/services.service";

@Injectable()
export class ReportsService {
  constructor(private readonly servicesService: ServicesService) {}

  async generate(startDate: number, endDate: number) {
    //const startDateMoment = moment(startDate);
    //const endDateMoment = moment(endDate);

    let x = await this.servicesService.findAllBetween(new Date(startDate), new Date(endDate));
    const report: Report = new Report();
    report.date = 1653368398914;
    const result = [];
    result.push(report);
    return result;
  }
}
