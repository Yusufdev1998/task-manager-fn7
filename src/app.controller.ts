import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/tasks')
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  getTasks() {
    return this.appService.findAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.appService.getTaskById(+id);
  }

  @Post()
  createTask(@Body() body: any) {
    return this.appService.createTask(body);
  }

  @Patch('/:id')
  updateTask(@Body() body: any, @Param('id') id: string) {
    return this.appService.updateTask(body, +id);
  }

  @Delete('/:id')
  removeTask(@Param('id') id: string) {
    return this.appService.deleteTask(+id);
  }
}
