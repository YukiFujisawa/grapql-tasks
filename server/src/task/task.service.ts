// task用のサービス

import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/task.input';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    const task = new Task();
    task.id = 1;
    task.name = 'Task1';
    task.dueDate = '2021-07-01';
    task.status = 'NOT_STARTED';
    this.tasks.push(task);
    return this.tasks;
  }

  /**
   * タスクを作成する
   * @param task タスク
   * @returns 作成したタスク
   */
  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    const task = new Task();
    task.id = this.tasks.length + 1;
    task.name = name;
    task.dueDate = dueDate;
    task.description = description;
    task.status = 'NOT_STARTED';
    this.tasks.push(task);
    return task;
  }
}
