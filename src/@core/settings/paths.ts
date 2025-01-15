import { Path } from "@core/types/paths"

const authPaths: Path = {
  auth: '/auth',
  signIn: '/auth/iniciar-sesion',
}

const taskPaths: Path = {
  home: '/',
  taskList: '/tareas',
  addTask: '/tareas/agregar',
  editTask: '/tareas/:id',
}

export const PATHS: Record<string, Path> = {
  authPaths: authPaths,
  taskPaths: taskPaths,
}

