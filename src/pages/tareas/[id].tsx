import { Layout } from '@/components/layout';
import { createServerSideProps } from '@/lib/data-fetching/ssr';
import TaskForm from '@/modules/Tasks/TaskForm';
import { PageProps } from '@core/types';
import { Paper } from '@mui/material';

type EditTaskPageProps = PageProps & {
  id: string;
};

export const getServerSideProps = createServerSideProps<EditTaskPageProps>(
  async ({ context }) => {
    const { id } = context.params as { id: string };

    return {
      props: {
        id,
      },
    };
  },
);

export default function EditTaskPage({ id }: EditTaskPageProps) {
  return (
    <Layout>
      <Paper
        sx={{
          padding: 3,
          marginBottom: 2,
        }}
      >
        <TaskForm />
      </Paper>
    </Layout>
  );
}
