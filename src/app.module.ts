import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './controllers/app.controller';
import { NerdController } from './controllers/nerd.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, NerdController],
})
export class AppModule { };
