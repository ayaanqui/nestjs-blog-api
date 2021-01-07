import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

class NerdOb {
  name: string;
  isNerd: boolean;

  constructor(name: string) {
    this.name = name;
    this.isNerd = (name === "Ayaan");
  }
}

interface PostMessage {
  name: string;
  message: string;
}

@Controller('nerd')
export class NerdController {
  @Get("/")
  nerdHome() {
    return { message: "Sup, nerds?" };
  }

  @Get("/ami")
  findNerd(@Query() query): NerdOb {
    return (query.name != null) ? new NerdOb(query.name) : new NerdOb("No name");
  }

  @Get("/me/:name")
  getName(@Param() params): Object {
    return { name: params.name };
  }

  @Post("/message")
  postMessage(@Body() data: PostMessage): PostMessage {
    console.log(data);
    return data;
  }
}