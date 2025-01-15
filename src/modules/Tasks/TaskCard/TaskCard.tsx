import { Task, TaskStatus } from '@core/types/models/task';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useTasksStore } from '@/stores/tasks';
import { useRouter } from 'next/router';

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const { push } = useRouter();

  const removeTask = useTasksStore((state) => state.removeTask);

  const goToEditTask = () => {
    push(`/tareas/${task.id}`);
  }

  const mapStatusToColor = (status: TaskStatus) => {
    switch (status) {
      case TaskStatus.Pending:
        return 'warning';
      case TaskStatus.InProgress:
        return 'info';
      case TaskStatus.Completed:
        return 'success';
    }
  };

  return (
    <Card>
      <CardContent>
        <Chip
          label={task.status}
          variant="outlined"
          color={mapStatusToColor(task.status)}
          size="small"
        />
        <Box my={2}>
          <Typography variant="h2">{task.title}</Typography>
          <Typography variant="body1">{task.description}</Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <Box display="flex" gap="2px">
          <Tooltip title="Editar" color="primary">
            <IconButton onClick={() => goToEditTask()}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar" color="error">
            <IconButton onClick={() => removeTask(task.id)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
}
