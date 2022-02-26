import { Repository } from 'typeorm';
import { Task } from './../entities/task.entity';
import { Category } from './../entities/category.entity';
export declare class TasksService {
    private tasksRepo;
    private categoryRepo;
    constructor(tasksRepo: Repository<Task>, categoryRepo: Repository<Category>);
    findAll(): Promise<any>;
    findOne(id: number): Promise<Task>;
    create(body: any): Promise<Task>;
    update(id: number, body: any): Promise<Task>;
    remove(id: number): Promise<boolean>;
}
