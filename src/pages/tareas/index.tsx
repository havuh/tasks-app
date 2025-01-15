import { Layout } from '@/components/layout';
import { createServerSideProps } from '@/lib/data-fetching/ssr';
import { TasksList } from '@/modules/Tasks';
import { getTasks } from '@/services/tasks';
import { useTasksStore } from '@/stores/tasks';
import { PageProps } from '@core/types';
import { PaginatedResponse } from '@core/types/api';
import { Task } from '@core/types/models/task';
import { useEffect } from 'react';

type TasksPageProps = PageProps & {
  tasks: PaginatedResponse<Task>;
};

export const getServerSideProps = createServerSideProps<TasksPageProps>(
  async () => {
    const tasks = await getTasks();

    return {
      props: {
        tasks,
      },
    };
  },
);

export default function TasksPage({ tasks }: TasksPageProps) {
  const setTasks = useTasksStore((state) => state.setTasks);
  const storeTasks = useTasksStore((state) => state.tasks);

  useEffect(() => {
    if (storeTasks.length) return;

    setTasks(tasks.data);
  }, []);

  return (
    <Layout>
      <TasksList />
    </Layout>
  );
}
