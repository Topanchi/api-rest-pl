"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_controller_1 = require("./controllers/task.controller");
const category_entity_1 = require("./entities/category.entity");
const photo_entity_1 = require("./entities/photo.entity");
const profile_entity_1 = require("./entities/profile.entity");
const task_entity_1 = require("./entities/task.entity");
const user_entity_1 = require("./entities/user.entity");
const tasks_service_1 = require("./services/tasks.service");
const user_controller_1 = require("./controllers/user.controller");
const user_service_1 = require("./services/user.service");
const photos_service_1 = require("./services/photos.service");
const categories_service_1 = require("./services/categories.service");
const photos_controller_1 = require("./controllers/photos.controller");
const categories_controller_1 = require("./controllers/categories.controller");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task, user_entity_1.User, profile_entity_1.Profile, photo_entity_1.Photo, category_entity_1.Category])],
        controllers: [
            task_controller_1.TaskController,
            user_controller_1.UserController,
            photos_controller_1.PhotosController,
            categories_controller_1.CategoriesController,
        ],
        providers: [tasks_service_1.TasksService, user_service_1.UserService, photos_service_1.PhotosService, categories_service_1.CategoriesService],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map