// task用のサービス

import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

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
}
