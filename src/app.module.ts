import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { NerdController } from './controllers/nerd.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './database/dbconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: dbconfig.username,
      password: dbconfig.password,
      database: dbconfig.database,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, NerdController],
})
export class AppModule { }
