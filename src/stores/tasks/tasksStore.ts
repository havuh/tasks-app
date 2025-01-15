import { Properties } from '@core/types';
import { create } from 'zustand';
import { TasksState } from '.';
import { Task, TaskFormValues, TaskStatus } from '@core/types/models/task';
import { getTasks } from '@/services/tasks';
import { persist } from 'zustand/middleware';

const initialState: Properties<TasksState> = {
  tasks: [],
  selectedTask: null,
};

export const useTasksStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      setTasks: (tasks: Task[]) => set({ tasks }),
      addTask: async (task: TaskFormValues) => {
        set((state: TasksState) => ({
          tasks: [
            ...state.tasks,
            {
              id: state.tasks.length + 1,
              ...task,
              status: task.status as TaskStatus,
            },
          ],
        }));
      },
      getById: (id: number) => {
        const task = get().tasks.find((t: Task) => t.id === id);
        return task;
      },
      removeTask: (id: number) => {
        set((state: TasksState) => ({
          tasks: state.tasks.filter((task: Task) => task.id !== Number(id)),
        }));
      },
      updateTask: (task: Task) => {
        set((state: TasksState) => ({
          tasks: state.tasks.map((t: Task) => (t.id === task.id ? task : t)),
        }));
      },
      getTasks: async () => {
        const tasks = await getTasks();
        set({ tasks: tasks.data });
      },
    }),
    {
      name: 'tasks-storage',
      partialize: (state: TasksState) => ({ tasks: state.tasks }),
    },
  ),
);
