import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async findAllTasks() {
    const tasks = await this.prisma.task.findMany();
    return {
      tasks,
    };
  }

  async getTaskById(id: number) {
    const task = await this.prisma.task.findFirst({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException(`Task not found by this ID:${id}`);
    }

    return task;
  }

  async createTask(task: any) {
    return this.prisma.task.create({
      data: task,
    });
  }

  async updateTask(task: any, id: number) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: task,
    });
  }

  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
