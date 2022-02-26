import { Repository } from 'typeorm';
import { Category } from './../entities/category.entity';
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    create(body: any): Promise<Category[]>;
}
