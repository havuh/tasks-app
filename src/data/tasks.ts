import { Task, TaskStatus } from '@core/types/models/task';

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Get all tasks from the API',
    description: 'Get all tasks from the API using a GET request',
    status: TaskStatus.Completed,
  },
  {
    id: 2,
    title: 'Create a new task',
    description: 'Create a new task using a POST request',
    status: TaskStatus.InProgress,
  },
  {
    id: 3,
    title: 'Update a task',
    description: 'Update a task using a PUT request',
    status: TaskStatus.Pending,
  },
  {
    id: 4,
    title: 'Delete a task',
    description: 'Delete a task using a DELETE request',
    status: TaskStatus.Pending,
  },
];

export const tasksOptions = [
  { name: TaskStatus.Pending.toString(), id: 1 },
  { name: TaskStatus.InProgress.toString(), id: 2 },
  { name: TaskStatus.Completed.toString(), id: 3 },
];
