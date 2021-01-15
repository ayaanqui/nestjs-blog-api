import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/entities/articles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) { }

    findAll(): Promise<Article[]> {
        return this.articleRepository.find();
    }

    findOne(id: string): Promise<Article> {
        return this.articleRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.articleRepository.delete(id);
    }
}