import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChorisimoUser } from './user.entity';
import { hash, UpdatableField } from './user.utils';
import * as crypto from 'crypto';

@Injectable()
export class ChorisimoUserService {
  readonly #usersRepository: Repository<ChorisimoUser>;

  constructor(@InjectRepository(ChorisimoUser) usersRepository: Repository<ChorisimoUser>) {
    this.#usersRepository = usersRepository;
  }

  /**
   * Inserts a user into the database
   * To prevent unwanted updates it will set the id to undefined.
   * To prevent adding a potentially bad record it will also set the deleted flag to false
   * It will also hash the password before the insert operation to ensure security.
   * @param user
   */
  public async insert(user: ChorisimoUser): Promise<Required<ChorisimoUser>> {
    // removing the id as a guard against edits
    if (typeof user.id !== 'undefined') {
      user.id = undefined;
    }

    // hashing the password for protection
    user.password = await hash(user.password);

    // Prevents inserting a deleted user;
    user.deleted = false;

    const insertedUserPromise = this.#usersRepository.save(user);

    return insertedUserPromise as Promise<Required<ChorisimoUser>>;
  }

  /**
   * Does a soft delete operation on the user
   * @param id
   */
  public async deleteById(id: number): Promise<ChorisimoUser | null> {
    const toDelete = await this.#usersRepository.findOneBy({
      id,
      deleted: false,
    });

    if (toDelete === null) {
      return null;
    }

    toDelete.password = '';
    toDelete.email = crypto.randomUUID();
    toDelete.deleted = true;

    return this.#usersRepository.save(toDelete);
  }

  /**
   * Updated at least one of the fields.
   * If no fields are provided, then nothing happens
   * If a password is provided, it will be hashed beforehand
   * @param id
   * @param fields
   */
  public async update(
    id: number,
    fields: Partial<UpdatableField>
  ): Promise<Required<ChorisimoUser> | null | symbol> {
    const newEmail = fields.email;
    const newPasswordCandidate = fields.password;
    const newNickname = fields.nickname;

    if (
      [typeof newEmail, typeof newPasswordCandidate, typeof newNickname].every(
        (x) => x === 'undefined'
      )
    ) {
      return Symbol();
    }

    const toUpdate = await this.#usersRepository.findOneBy({
      id,
      deleted: false,
    });

    if (toUpdate === null) {
      return null;
    }

    toUpdate.password = newPasswordCandidate
      ? await hash(newPasswordCandidate)
      : toUpdate.password;
    toUpdate.email = newEmail ?? toUpdate.email;
    toUpdate.nickname = newNickname ?? toUpdate.nickname;

    const patchedPromise = this.#usersRepository.save(toUpdate);

    return patchedPromise as Promise<Required<ChorisimoUser>>;
  }

  /**
   * Gets a user by id.
   * @param id
   */
  public getById(id: number): Promise<Required<ChorisimoUser> | null> {
    return this.#usersRepository.findOneBy({ id, deleted: false }) as Promise<Required<ChorisimoUser> | null>;
  }
}
