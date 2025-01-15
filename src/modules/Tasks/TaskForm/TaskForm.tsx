import { Form } from '@/components/ui';
import useTaskForm from './useTaskForm';
import InputForm from '@/components/ui/InputForm';
import { Box, Typography, Button as MuiButton, Stack } from '@mui/material';
import { SelectForm } from '@/components/ui/SelectForm';
import { tasksOptions } from '@/data/tasks';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { PATHS } from '@core/settings/paths';
import { TypeWithKey } from '@core/types';
import { TaskFormValues } from '@core/types/models/task';

export default function TaskForm() {
  const { isLoading, saveTask, methods, id } = useTaskForm();

  const handleSubmit = (values: TypeWithKey<any>) => {
    if (isLoading) return;

    saveTask(values as TaskFormValues);
  };

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <Typography variant="h2" mb={2}>
        {id ? 'Editar tarea' : 'Crear tarea'}
      </Typography>
      <Box mb={2}>
        <InputForm label="Título" name="title" required />
      </Box>
      <Box mb={2}>
        <InputForm label="Descripción" name="description" required />
      </Box>
      <SelectForm label="Estado" name="status" options={tasksOptions} />

      <Stack direction="row" pt={2} gap={1} justifyContent="flex-end">
        <MuiButton
          variant="outlined"
          LinkComponent={Link}
          href={PATHS.taskPaths.taskList}
        >
          Cancelar
        </MuiButton>
        <Button
          type="submit"
          text={id ? 'Actualizar' : 'Crear'}
          loader={isLoading}
          variant="contained"
        />
      </Stack>
    </Form>
  );
}
