// task用のサービス

import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTasks(userId: number): Promise<Task[]> {
    return await this.prismaService.task.findMany({
      where: { userId },
    });
  }

  /**
   * タスクを作成する
   * @param task タスク
   * @returns 作成したタスク
   */
  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description, userId } = createTaskInput;
    const task = this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
        userId,
      },
    });
    return task;
  }

  /**
   * タスクを更新する
   * @param task タスク
   * @returns 更新したタスク
   */
  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const updatedTask = await this.prismaService.task.update({
      where: { id: updateTaskInput.id },
      data: {
        name: updateTaskInput.name,
        dueDate: updateTaskInput.dueDate,
        status: updateTaskInput.status,
        description: updateTaskInput.description,
      },
    });
    return updatedTask;
  }
  /**
   * タスクを削除する
   * @param id タスクID
   * @returns 削除したタスク
   * @throws タスクが見つからなかった場合
   */
  async deleteTask(id: number): Promise<Task> {
    const task = await this.prismaService.task.delete({
      where: { id },
    });
    return task;
  }
}
