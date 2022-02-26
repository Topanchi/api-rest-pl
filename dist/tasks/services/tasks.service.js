"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./../entities/task.entity");
const category_entity_1 = require("./../entities/category.entity");
let TasksService = class TasksService {
    constructor(tasksRepo, categoryRepo) {
        this.tasksRepo = tasksRepo;
        this.categoryRepo = categoryRepo;
    }
    findAll() {
        const contador = this.tasksRepo.count();
        contador.then(f => {
            console.log("Cantidad de registros: ", f);
        });
        const result = this.tasksRepo.query('SELECT * FROM task ORDER BY id ASC');
        result.then(f => {
        }).catch(e => {
            console.log("Error: ", e);
        });
        return result;
    }
    findOne(id) {
        return this.tasksRepo.findOne(id, {
            relations: ['categories'],
        });
    }
    async create(body) {
        console.log("body: ", body);
        const newTask = new task_entity_1.Task();
        newTask.name = body.name;
        newTask.completed = body.completed;
        return this.tasksRepo.save(newTask);
    }
    async update(id, body) {
        console.log("editar id: ", id, "con body: ", body);
        const task = await this.tasksRepo.findOne(id);
        this.tasksRepo.merge(task, body);
        return this.tasksRepo.save(task);
    }
    async remove(id) {
        await this.tasksRepo.delete(id);
        return true;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map