import { AUTH_RESPONSE } from '@/data/auth';
import { AuthResponse } from '@core/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>,
) {
  const { method } = req;

  if (method === 'POST') {
    return res.status(200).json(AUTH_RESPONSE);
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
