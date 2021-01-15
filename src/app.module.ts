import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './controllers/app.controller';
import { ArticleController } from './controllers/article.controller';
import { NerdController } from './controllers/nerd.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, NerdController, ArticleController],
})
export class AppModule { };
