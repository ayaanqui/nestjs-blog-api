import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from 'src/controllers/article.controller';
import { Article } from 'src/entities/articles.entity';
import { ArticlesService } from 'src/services/article.service';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticlesService],
    controllers: [ArticleController],
})
export class UsersModule { }