import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChorisimoUser } from './user.entity';
import { hash } from './utils';

@Injectable()
export class ChorisimoUserService {

  readonly #usersRepository: Repository<ChorisimoUser>;

  constructor(@InjectRepository(ChorisimoUser) usersRepository: Repository<ChorisimoUser>) {
    this.#usersRepository = usersRepository;
  }

  public async insert(user: ChorisimoUser): Promise<ChorisimoUser> {

    // removing the id as a guard against edits
    if (typeof user.id !== 'undefined') {
      user.id = undefined;
    }

    // hashing the password for protection
    user.password = await hash(user.password);

    return this.#usersRepository.save(user);

  }

}
