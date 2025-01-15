import { AuthResponse, AuthToken } from '@core/types';
import Cookies from 'js-cookie';
import { DateTime } from 'luxon';

export const ACCESS_TOKEN_KEY = 'access_token';

export const setAuthTokenToCookie = ({
  access_token: accessToken,
  expires_in: expiresIn,
}: AuthResponse): void => {
  const expires = DateTime.now()
    .plus({ seconds: expiresIn - 30 })
    .toJSDate();

  const options: Cookies.CookieAttributes = {
    path: '/',
    expires,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  };

  Cookies.set(ACCESS_TOKEN_KEY, accessToken, options);
};

export const getAuthTokenFromCookie = (): AuthToken | null => {
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);

  if (accessToken) {
    return {
      access_token: accessToken,
      expires_in: 0,
      token_type: 'Bearer',
    };
  }

  return null;
};

export const clearAuthTokenFromCookie = (): void => {
  Cookies.remove(ACCESS_TOKEN_KEY);
};
