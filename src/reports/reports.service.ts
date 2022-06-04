import { Injectable } from "@nestjs/common";
import moment from "moment";
import { Report } from "./entities/report.entity";
import { ServicesService } from "../services/services.service";
import { SubTypeService } from "../sub-type/sub-type.service";
import { FireCauseService } from "../fire-cause/fire-cause.service";
import { CODES } from "../utils/Constants";
const _: _.LoDashStatic = require("lodash");

@Injectable()
export class ReportsService {
  constructor(
    private readonly servicesService: ServicesService,
    private readonly subTypeService: SubTypeService,
    private readonly fireCauseService: FireCauseService
  ) {}

  async generate(startDate: number, endDate: number) {
    let services = await this.servicesService.findAllBetween(new Date(startDate), new Date(endDate));
    let subTypes = await this.subTypeService.findAllIncludingDisabled();
    let fireCauses = await this.fireCauseService.findAllIncludingDisabled();

    let services1040 = services.filter(
      (service) =>
        subTypes.find((subType) => subType.id.toString() === service.sub_type._id.toString())?.code === CODES.FIRE
    );
    let services1041 = services.filter(
      (service) =>
        subTypes.find((subType) => subType.id.toString() === service.sub_type._id.toString())?.code === CODES.ACCIDENT
    );
    let services1043 = services.filter(
      (service) =>
        subTypes.find((subType) => subType.id.toString() === service.sub_type._id.toString())?.code === CODES.RESCUE
    );

    const report: Report = new Report();
    report.date = new Date();

    // 1040
    let servicesSubTypeIdArray = services1040.map((service) => service.sub_type._id);
    let subtypesCountMap = _.countBy(servicesSubTypeIdArray);
    let subTypeCountById = Object.entries(subtypesCountMap).map(([id, count]) => ({ id, count }));
    let subTypeCountByName = subTypeCountById.map((row) => ({
      id: row.id,
      name: subTypes.find((subType) => subType.id.toString() === row.id.toString()).name,
      count: row.count,
    }));
    report.subTypeCount1040 = subTypeCountByName;

    // 1041
    servicesSubTypeIdArray = services1041.map((service) => service.sub_type._id);
    subtypesCountMap = _.countBy(servicesSubTypeIdArray);
    subTypeCountById = Object.entries(subtypesCountMap).map(([id, count]) => ({ id, count }));
    subTypeCountByName = subTypeCountById.map((row) => ({
      id: row.id,
      name: subTypes.find((subType) => subType.id.toString() === row.id.toString()).name,
      count: row.count,
    }));
    report.subTypeCount1041 = subTypeCountByName;

    // 1043
    servicesSubTypeIdArray = services1043.map((service) => service.sub_type._id);
    subtypesCountMap = _.countBy(servicesSubTypeIdArray);
    subTypeCountById = Object.entries(subtypesCountMap).map(([id, count]) => ({ id, count }));
    subTypeCountByName = subTypeCountById.map((row) => ({
      id: row.id,
      name: subTypes.find((subType) => subType.id.toString() === row.id.toString()).name,
      count: row.count,
    }));
    report.subTypeCount1043 = subTypeCountByName;

    let servicesDamageArray = services1040.map((service) => service.damage);
    let danmgeCountMap = _.countBy(servicesDamageArray);
    let damageCount = Object.entries(danmgeCountMap).map(([name, count]) => ({ id: name, name, count }));
    report.damageCount = damageCount;

    let servicesDamage1044Array = _.flattenDeep(
      services1040.map((service) => service.quantities1044.map((x) => Array(x.quantity).fill(x.name)))
    );
    let danmge1044CountMap = _.countBy(servicesDamage1044Array);
    let damage1044Count = Object.entries(danmge1044CountMap).map(([id, count]) => ({ id, name: undefined, count }));
    report.quantities1044Count = damage1044Count;

    let possibleCausesByIdArray = services.map((service) => service.possible_cause._id);
    let possibleCausesCountMap = _.countBy(possibleCausesByIdArray);
    let possiblecausesCountById = Object.entries(possibleCausesCountMap).map(([id, count]) => ({ id, count }));
    let possiblecausesCountByName = possiblecausesCountById.map((row) => ({
      id: row.id,
      name: fireCauses.find((fireCause) => fireCause.id.toString() === row.id.toString()).name,
      count: row.count,
    }));
    report.possibleCausesCount = possiblecausesCountByName;

    report.count1040 = services1040.length;
    report.count1041 = services1041.length;
    report.count1043 = services1043.length;

    let resourcesUsed1040Array = _.flattenDeep(
      services1040.map((service) => service.resources_used.map((x) => Array(x.quantity).fill(x.resource)))
    );
    let resourcesUsed1040CountMap = _.countBy(resourcesUsed1040Array);
    let resourcesUsed1040Count = Object.entries(resourcesUsed1040CountMap).map(([name, count]) => ({
      id: undefined,
      name,
      count,
    }));
    report.resourcesUsedCount1040 = resourcesUsed1040Count;

    let resourcesUsed1041Array = _.flattenDeep(
      services1041.map((service) => service.resources_used.map((x) => Array(x.quantity).fill(x.resource)))
    );
    let resourcesUsed1041CountMap = _.countBy(resourcesUsed1041Array);
    let resourcesUsed1041Count = Object.entries(resourcesUsed1041CountMap).map(([name, count]) => ({
      id: undefined,
      name,
      count,
    }));
    report.resourcesUsedCount1041 = resourcesUsed1041Count;

    let servicesDamage1041Array = _.flattenDeep(services1041.map((service) => service.damage1041));
    let servicesDamage1041CountMap = _.countBy(servicesDamage1041Array);
    let servicesDamage1041Count = Object.entries(servicesDamage1041CountMap).map(([name, count]) => ({
      id: name,
      name,
      count,
    }));
    report.damage1041Count = servicesDamage1041Count;

    return report;
  }
}
