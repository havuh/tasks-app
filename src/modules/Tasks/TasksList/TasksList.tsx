import { useTasksStore } from '@/stores/tasks';
import { Button, Paper, Stack, Typography } from '@mui/material';
import TaskCard from '../TaskCard';
import s from './TasksList.module.scss';
import { Add } from '@mui/icons-material';
import Link from 'next/link';
import { PATHS } from '@core/settings/paths';

export default function TaskList() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <Paper
      sx={{
        padding: 3,
        marginBottom: 2,
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          marginBottom: 3,
        }}
      >
        <Typography variant="h1">Mis tareas</Typography>
        <Button
          variant="contained"
          LinkComponent={Link}
          sx={{
            width: 'auto',
          }}
          endIcon={<Add />}
          href={PATHS.taskPaths.addTask}
        >
          Crear nueva tarea
        </Button>
      </Stack>
      <div className={s.tasksList}>
        {tasks.length === 0 ? (
          <Typography variant="body1">No hay tareas para mostrar</Typography>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </Paper>
  );
}
