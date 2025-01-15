import { AuthResponse } from '@core/types';
import { USER } from './user';

export const AUTH_RESPONSE: AuthResponse = {
  access_token: 'sample-jwt-token',
  expires_in: 60 * 60 * 24 * 7,
  token_type: 'Bearer',
  user: USER,
};
