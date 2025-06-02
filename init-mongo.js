db = connect("mongodb://127.0.0.1:27017/jncvbpms");

// Users collection data
const users = [
  {
    _id: ObjectId("62cf858a64a95e0a6ce006f7"),
    __v: 0,
    createdAt: ISODate("2022-07-14T02:55:06.658Z"),
    disabled: false,
    email: "xxx@gmail.com",
    firstName: "Rootx",
    isAdmin: true,
    lastName: "aaax",
    password: "$2b$10$5LySk5TemAORVyk5idSCSOnNGYXArqFnS58pcHn5tpDiWTOLFIo2q", // password: 'root'
    updatedAt: ISODate("2024-09-02T18:09:48.329Z"),
    username: "root",
  },
];

// Subtypes collection data
const subtypes = [
  {
    _id: ObjectId("6294044ee2b09e07c4efcb3e"),
    __v: 0,
    code: "10.40",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Edificación de Material",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb46"),
    __v: 0,
    code: "10.41",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Caída",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb4b"),
    __v: 0,
    code: "10.43",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Coberturas",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb3d"),
    __v: 0,
    code: "10.40",
    createdAt: ISODate("2022-05-29T23:39:58.830Z"),
    disabled: false,
    name: "Edificación de Madera",
    updatedAt: ISODate("2022-05-29T23:39:58.830Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb42"),
    __v: 0,
    code: "10.40",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Falsa Alarma",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb47"),
    __v: 0,
    code: "10.41",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Aeronave",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb4c"),
    __v: 0,
    code: "10.43",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Curso/Charla",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb40"),
    __v: 0,
    code: "10.40",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Forestal Bosque",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb44"),
    __v: 0,
    code: "10.41",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Choque",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb49"),
    __v: 0,
    code: "10.43",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Recuperación",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb3f"),
    __v: 0,
    code: "10.40",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Forestal Pastizal",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb43"),
    __v: 0,
    code: "10.41",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Arrollamiento",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb48"),
    __v: 0,
    code: "10.43",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Rescate",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb4d"),
    __v: 0,
    code: "10.43",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Transporte",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb41"),
    __v: 0,
    code: "10.40",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Vehículo",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb45"),
    __v: 0,
    code: "10.41",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Vuelco",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb4a"),
    __v: 0,
    code: "10.43",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Animales Alimañas",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
  {
    _id: ObjectId("62e6f4caef473376af2e6e37"),
    __v: 0,
    code: "10.40",
    createdAt: ISODate("2022-05-29T23:39:58.831Z"),
    disabled: false,
    name: "Otro",
    updatedAt: ISODate("2022-05-29T23:39:58.831Z"),
  },
];

// Ranks collection data
const ranks = [
  {
    _id: ObjectId("6294044ee2b09e07c4efcb26"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Capitán",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb2b"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Combatiente",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb28"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Sub Teniente",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb27"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Teniente",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb29"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Sargento",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb2a"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Cabo",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
];

// Fireclasses collection data
const fireclasses = [
  {
    _id: ObjectId("6294044ee2b09e07c4efcb39"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.770Z"),
    disabled: false,
    name: "Sólidos Fibrosos",
    updatedAt: ISODate("2022-05-29T23:39:58.770Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb3a"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.770Z"),
    disabled: false,
    name: "Líquidos Inflamables",
    updatedAt: ISODate("2022-05-29T23:39:58.770Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb3b"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.770Z"),
    disabled: false,
    name: "Eléctricos",
    updatedAt: ISODate("2022-05-29T23:39:58.770Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb3c"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.770Z"),
    disabled: false,
    name: "Especiales",
    updatedAt: ISODate("2022-05-29T23:39:58.770Z"),
  },
];

// Firecauses collection data
const firecauses = [
  {
    _id: ObjectId("6294044ee2b09e07c4efcb34"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.693Z"),
    disabled: false,
    name: "Accidentes domésticos",
    updatedAt: ISODate("2022-05-29T23:39:58.693Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb35"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.693Z"),
    disabled: false,
    name: "Fallas eléctricas",
    updatedAt: ISODate("2022-05-29T23:39:58.693Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb36"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.693Z"),
    disabled: false,
    name: "Fugas de gases combustibles",
    updatedAt: ISODate("2022-05-29T23:39:58.693Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb37"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.693Z"),
    disabled: false,
    name: "Velas y cigarros mal apagados",
    updatedAt: ISODate("2022-05-29T23:39:58.693Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb38"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.693Z"),
    disabled: false,
    name: "Niños jugando con fósforos",
    updatedAt: ISODate("2022-05-29T23:39:58.693Z"),
  },
  {
    _id: ObjectId("62e7046cef473376af2e6e3c"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.693Z"),
    disabled: false,
    name: "Otro",
    updatedAt: ISODate("2022-05-29T23:39:58.693Z"),
  },
];

// Duties collection data
const duties = [
  {
    _id: ObjectId("6294044ee2b09e07c4efcb30"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Picadura de alimañas",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb2f"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: "Todo tipo de incendios",
    disabled: false,
    isDeletable: false,
    name: "Incendios",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb2d"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Accidentes domésticos",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb2e"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Derrumbes",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb2c"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Accidentes de tránsito",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb32"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Rescate de mascotas",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb31"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Rescate en profundidad",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
  {
    _id: ObjectId("6294044ee2b09e07c4efcb33"),
    __v: 0,
    createdAt: ISODate("2022-05-29T23:39:58.568Z"),
    description: null,
    disabled: false,
    isDeletable: false,
    name: "Traslados",
    updatedAt: ISODate("2022-05-29T23:39:58.568Z"),
  },
];

// Insert users documents if they don't exist
users.forEach((user) => {
  if (!db.users.findOne({ _id: user._id })) {
    db.users.insertOne(user);
  }
});

// Insert subtypes documents if they don't exist
subtypes.forEach((subtype) => {
  if (!db.subtypes.findOne({ _id: subtype._id })) {
    db.subtypes.insertOne(subtype);
  }
});

// Insert ranks documents if they don't exist
ranks.forEach((rank) => {
  if (!db.ranks.findOne({ _id: rank._id })) {
    db.ranks.insertOne(rank);
  }
});

// Insert fireclasses documents if they don't exist
fireclasses.forEach((fireclass) => {
  if (!db.fireclasses.findOne({ _id: fireclass._id })) {
    db.fireclasses.insertOne(fireclass);
  }
});

// Insert firecauses documents if they don't exist
firecauses.forEach((firecause) => {
  if (!db.firecauses.findOne({ _id: firecause._id })) {
    db.firecauses.insertOne(firecause);
  }
});

// Insert duties documents if they don't exist
duties.forEach((duty) => {
  if (!db.duties.findOne({ _id: duty._id })) {
    db.duties.insertOne(duty);
  }
});
