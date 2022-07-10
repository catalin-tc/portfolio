import * as argon2 from 'argon2';
import { ChorisimoUser } from './user.entity';

export function hash(password: string): Promise<string> {
  return argon2.hash(password);
}

export type UpdatableField = Pick<
  ChorisimoUser,
  'email' | 'nickname' | 'password'
>;
