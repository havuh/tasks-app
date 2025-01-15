import { Layout } from '@/components/layout';
import TaskForm from '@/modules/Tasks/TaskForm';
import { Paper } from '@mui/material';

export default function AddTaskPage() {
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
