export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export interface TaskFormValues {
  title: string;
  description: string;
  status: string;
}

export enum TaskStatus {
  Pending = 'pendiente',
  InProgress = 'en progreso',
  Completed = 'completado',
}
