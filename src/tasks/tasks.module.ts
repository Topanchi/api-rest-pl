import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task.controller';
import { Category } from './entities/category.entity';
import { Photo } from './entities/photo.entity';
import { Profile } from './entities/profile.entity';
import { Task } from './entities/task.entity';
import { User } from './entities/user.entity';
import { TasksService } from './services/tasks.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { PhotosService } from './services/photos.service';
import { CategoriesService } from './services/categories.service';
import { PhotosController } from './controllers/photos.controller';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User, Profile, Photo, Category])],
  controllers: [
    TaskController,
    UserController,
    PhotosController,
    CategoriesController,
  ],
  providers: [TasksService, UserService, PhotosService, CategoriesService],
})
export class TasksModule {}
