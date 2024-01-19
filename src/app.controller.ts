import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "Hello world!";
  }

  @Get("/news")
  getNewsRoute() {
    return "No news yet!";
  }
}
