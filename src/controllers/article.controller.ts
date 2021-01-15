import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Article } from 'src/entities/articles.entity';
import { getConnection, getManager } from 'typeorm';

@Controller('articles')
export class ArticleController {
    @Get('/')
    async getArticles(): Promise<any> {
        const article = await getManager()
            .createQueryBuilder(Article, "article");

        return article;
    }
};