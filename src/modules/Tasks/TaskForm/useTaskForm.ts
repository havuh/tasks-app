import { useTasksStore } from '@/stores/tasks';
import { PATHS } from '@core/settings/paths';
import { TaskFormValues, TaskStatus } from '@core/types/models/task';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useTaskForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const addTask = useTasksStore((state) => state.addTask);
  const getById = useTasksStore((state) => state.getById);
  const updateTask = useTasksStore((state) => state.updateTask);
  const params = useParams();
  const id = params?.id;

  const methods = useForm<TaskFormValues>({
    defaultValues: {
      title: '',
      description: '',
      status: TaskStatus.Pending.toString(),
    },
  });
  const { reset } = methods;

  useEffect(() => {
    if (id) {
      const task = getById(Number(id));
      if (task) {
        reset({
          title: task.title,
          description: task.description,
          status: task.status.toString(),
        });
      }
    }
  }, [id, getById, reset]);

  const saveTask = async (data: TaskFormValues) => {
    setIsLoading(true);

    try {
      if (id) {
        const task = getById(Number(id));

        if (!task) {
          throw new Error('Task not found');
        }

        task.title = data.title;
        task.description = data.description;
        task.status = data.status as TaskStatus;

        updateTask(task);
      } else {
        const task = {
          title: data.title,
          description: data.description,
          status: data.status,
        };

        addTask(task);
      }

      const nextUrl = new URL(PATHS.taskPaths.taskList, window.location.origin);
      router.push(nextUrl.pathname);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    saveTask,
    methods,
    id
  };
}
