import * as argon2 from 'argon2';

export function hash(password: string): Promise<string> {
  return argon2.hash(password);
}
