
import { Controller, Get } from '@nestjs/common';

@Controller('nerd')
export class NerdController {
  @Get()
  findAll(): string {
    return 'Sup nerds?';
  }
}