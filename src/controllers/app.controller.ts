import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("/")
  getHello(): Object {
    return { message: "Welcome the the blog API"};
  }
}
