import { Injectable } from "@nestjs/common";

/**
 * App service, responsible for providing a single method to get a greeting message.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
