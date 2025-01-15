import { AuthResponse, LoginFormValues } from '@core/types';
import { makeLocalApiUrl, post } from '@/lib/api';
import { LOGIN_URL } from './consts';

export const loginWithCredentials = async ({
  username,
  password,
}: LoginFormValues): Promise<AuthResponse> => {
  const url = makeLocalApiUrl(LOGIN_URL);

  return await post({
    url,
    params: {
      username,
      password,
    },
  });
};
