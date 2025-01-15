import { fetcher, makeLocalApiUrl } from '@/lib/api';
import { Task } from '@core/types/models/task';
import { TASKS_URL } from './consts';
import { PaginatedResponse } from '@core/types/api';

export const getTasks = async (): Promise<PaginatedResponse<Task>> => {
  const url = makeLocalApiUrl(TASKS_URL);

  return await fetcher({
    url,
  });
};
