import { CreateDutyInput } from "src/duty/duty.input";

export const duties: CreateDutyInput[] = [
  { name: 'Accidentes de tránsito', description: null, isDeletable: false },
  { name: 'Accidentes domésticos', description: null, isDeletable: false },
  { name: 'Derrumbes', description: null, isDeletable: false },
  { name: 'Incendios', description: "Todo tipo de incendios", isDeletable: false },
  { name: 'Picadura de alimañas', description: null, isDeletable: false },
  { name: 'Rescate en profundidad', description: null, isDeletable: false },
  { name: 'Rescate de mascotas', description: null, isDeletable: false },
  { name: 'Traslados', description: null, isDeletable: false }
];
