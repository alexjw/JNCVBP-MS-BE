import { BloodType } from "src/custom_types/blood_type";
import { VolunteerStatus } from "src/custom_types/volunteer_status";
import { CreateVolunteerInput } from "src/volunteers/dto/create-volunteer.input";

export const volunteers: CreateVolunteerInput[] = [
  {
    name: "Alex Jiñes",
    code: "OAbel",
    status: VolunteerStatus.Active,
    blood_type: BloodType.ABPositive,
    rank: null,
    address: null,
    incorporation_date: null,
    birth_date: null,
  },
  {
    name: "Jerson Paniagua",
    code: "PanyPY",
    status: VolunteerStatus.Active,
    blood_type: BloodType.ABPositive,
    rank: null,
    address: null,
    incorporation_date: null,
    birth_date: null,
  },
];
