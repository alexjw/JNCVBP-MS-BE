import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
const config = require("../config.js");

declare const module: any;

/**
 * @fileoverview
 * This file is the entry point for the server.
 */
async function bootstrap() {
  // This function is the entry point for the server.
  // It creates the NestJS app, enables validation for all routes
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Starts the server listening on the port specified in the config file.
  await app.listen(config.PORT);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
