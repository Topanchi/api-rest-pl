/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './../entities/task.entity';
import { Category } from './../entities/category.entity';

@Injectable()
export class TasksService {

    constructor(
    @InjectRepository(Task) private tasksRepo: Repository<Task>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    ) {}

    findAll() {
        const contador = this.tasksRepo.count();
        contador.then( f => {
            console.log("Cantidad de registros: ", f);
        });
        //this.tasksRepo.find()
        const result = this.tasksRepo.query('SELECT * FROM task ORDER BY id ASC');
        result.then( f => {
            //console.log("Resultado: ", f);
        }).catch( e => {
            console.log("Error: ", e);
        } );
        return result;
    }

    findOne(id: number) {
        return this.tasksRepo.findOne(id, {
            relations: ['categories'],
        });
    }

    async create(body: any) {
        console.log("body: ", body);
        const newTask = new Task();
        newTask.name = body.name;
        newTask.completed = body.completed;
        /* const categoriesIds = body.categoriesIds;
        const categories = await this.categoryRepo.findByIds(categoriesIds);
        newTask.categories = categories; */
        return this.tasksRepo.save(newTask);
    }

    async update(id: number, body: any) {
        console.log("editar id: ", id, "con body: ", body);
        const task = await this.tasksRepo.findOne(id);
        this.tasksRepo.merge(task, body);
        return this.tasksRepo.save(task);
    }

    async remove(id: number) {
        await this.tasksRepo.delete(id);
        return true;
    }
}
