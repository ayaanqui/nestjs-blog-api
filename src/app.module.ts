import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { NerdController } from './controllers/nerd.controller';

@Module({
  imports: [],
  controllers: [AppController, NerdController],
})
export class AppModule {}
