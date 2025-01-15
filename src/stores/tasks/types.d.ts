import { Task, TaskFormValues } from "@core/types/models/task";

export interface TasksState {
  tasks: Task[];
  selectedTask: Task | null;
  setTasks: (tasks: Task[]) => void;
  getById: (id: number) => Task | undefined;
  addTask: (task: TaskFormValues) => Promise<void>;
  removeTask: (id: number) => void;
  updateTask: (task: Task) => void;
  getTasks: () => void;
}
