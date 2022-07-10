import { ChorisimoUser } from '@chorisimo/user';
import { GetChorisimoUserDto } from './dtos/get-user.dto';
import { PostUserDto } from './dtos/post-user.dto';

export function mapUserToGetUserDto({ email, nickname, id }: Required<ChorisimoUser>): GetChorisimoUserDto {
  return new GetChorisimoUserDto(id, email, nickname);
}

export function mapPostUserDtoToUser(dto: PostUserDto): ChorisimoUser {
  return Object.assign(new ChorisimoUser(), dto);
}
