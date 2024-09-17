import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

/**
 * Main entry point for the server.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /** Returns the logged in user */
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  /**
   * The root route of the application.
   * This route is used to test if the application is running.
   * It returns a simple "Hello World!" message.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
