import { ChorisimoUser } from '@chorisimo/user';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class PostUserDto implements Pick<ChorisimoUser, 'email' | 'nickname' | 'password'> {

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  public email = '';

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  public nickname = '';

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  public password = '';
}
