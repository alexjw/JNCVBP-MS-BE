import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { Seeder } from "./seeders/seeder";
import { SeederModule } from "./seeders/seeder.module";

const config = require("../config.js");

/**
 * Seeder for the application.
 *
 * This script is used to seed the database with initial data.
 * It is not necessary to run this script for the application to work.
 *
 * The script will listen on the port specified in the config.js and
 * then seed the database with the data from the seeder module.
 */
async function bootstrap() {
  const app = await NestFactory.create(SeederModule);
  await app.listen(config.PORT).then((e) => {
    const seeder = app.get(Seeder);
    const logger = app.get(Logger);

    seeder
      .seed()
      .then(() => {
        logger.debug("Seeding complete!");
      })
      .catch((error) => {
        logger.error("Seeding failed!");
        throw error;
      })
      .finally(() => {
        app.close();
      });
  });
}
bootstrap();
