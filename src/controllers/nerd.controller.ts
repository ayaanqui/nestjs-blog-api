import { Controller, Get, Param, Query } from '@nestjs/common';

class NerdOb {
  name: string;
  isNerd: boolean;

  constructor(name: string) {
    this.name = name;
    this.isNerd = (name === "Ayaan");
  }
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

  @Get(":name")
  getName(@Param() params) {
    return { name: params.name };
  }
}