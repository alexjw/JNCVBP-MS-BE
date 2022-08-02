import { CreateFireCauseInput } from "../../fire-cause/dto/create-fire-cause.input";
import { OTHER_NAME } from "../../utils/Constants";

export const fire_causes: CreateFireCauseInput[] = [
  { name: "Accidentes domésticos" },
  { name: "Fallas eléctricas" },
  { name: "Fugas de gases combustibles" },
  { name: "Velas y cigarros mal apagados" },
  { name: "Niños jugando con fósforos" },
  { name: OTHER_NAME },
];
