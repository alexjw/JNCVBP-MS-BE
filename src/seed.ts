import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { Seeder } from './seeders/seeder';
import { SeederModule } from './seeders/seeder.module';

const config = require('../config.js');

async function bootstrap() {
  const app = await NestFactory.create(SeederModule);
  await app.listen(config.PORT)
    .then(e => {
      const seeder = app.get(Seeder);
      const logger = app.get(Logger);

      seeder.seed()
        .then(() => {
          logger.debug('Seeding complete!');
        })
        .catch(error => {
          logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => {
          app.close()
        });
    })
}
bootstrap();
