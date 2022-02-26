import { CategoriesService } from './../services/categories.service';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    addCategory(body: any): Promise<import("../entities/category.entity").Category[]>;
}
