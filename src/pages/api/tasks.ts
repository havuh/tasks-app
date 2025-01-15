import { TASKS } from '@/data/tasks';
import { PaginatedResponse } from '@core/types/api';
import { Task } from '@core/types/models/task';
import type { NextApiRequest, NextApiResponse } from 'next';

interface PostResponse {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedResponse<Task> | PostResponse>,
) {
  const { method } = req;

  if (method === 'GET') {
    const { page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);

    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = startIndex + limitNumber;

    const paginatedTasks = TASKS.slice(startIndex, endIndex);

    const response: PaginatedResponse<Task> = {
      page: pageNumber,
      limit: limitNumber,
      total: TASKS.length,
      totalPages: Math.ceil(TASKS.length / limitNumber),
      data: paginatedTasks,
    };

    res.status(200).json(response);
  } else if (method === 'POST') {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
      return res
        .status(400)
        .json({ message: 'Title, description, and status are required.' });
    }

    const newTask: Task = {
      id: TASKS.length + 1,
      title,
      description,
      status,
    };

    TASKS.push(newTask);

    res.status(201).json({
      message: 'Task added successfully.',
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
