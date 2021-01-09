import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { NerdController } from './controllers/nerd.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, NerdController],
})
export class AppModule { }
