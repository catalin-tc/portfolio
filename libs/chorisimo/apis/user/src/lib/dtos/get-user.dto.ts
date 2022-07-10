import type { ChorisimoUser } from '@chorisimo/user';

export class GetChorisimoUserDto implements Pick<ChorisimoUser, 'id' | 'nickname' | 'email'> {

  constructor(public readonly id: number,
              public readonly email: string,
              public readonly nickname: string) {
  }

}
