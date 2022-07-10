import { UpdatableField } from '@chorisimo/user';
import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class PatchUserDto implements Partial<UpdatableField> {

  @IsEmail()
  @IsString()
  @MaxLength(100)
  @IsOptional()
  public email?: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  public nickname?: string;

  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @IsOptional()
  public password?: string;
}
