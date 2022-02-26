import { Category } from './category.entity';
export declare class Task {
    id: number;
    name: string;
    completed: boolean;
    creationAt: Date;
    updatedAt: Date;
    categories: Category[];
}
