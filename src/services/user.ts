import axios from 'axios';

import { type User } from '@core/types/auth';
import { makeApiUrl } from '@/lib/api';
import { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED } from '@/lib/consts';

const userProfileUrl = makeApiUrl('/user/me/');

/**
 * Get user profile provided an access token, use this from the server side
 * @param {string} accessToken
 */
export const getUserProfile = async (
  accessToken: string,
): Promise<User | null> => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    const user = await axios
      .post<User>(userProfileUrl, undefined, { headers })
      .then((res) => res.data);

    return user ?? null;
  } catch (error: any) {
    const { status } = error?.response ?? {};

    if (
      status === UNAUTHORIZED ||
      status === NOT_FOUND ||
      status === BAD_REQUEST
    ) {
      return null;
    }

    throw new Error(`Error: ${error?.message as string}`);
  }
};
