import { ChorisimoUserService } from '@chorisimo/user';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { GetChorisimoUserDto } from './dtos/get-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { PostUserDto } from './dtos/post-user.dto';
import { mapPostUserDtoToUser, mapUserToGetUserDto } from './transformers';

@Controller('user')
export class ChorisimoApiUserController {
  #userService: ChorisimoUserService;

  constructor(userService: ChorisimoUserService) {
    this.#userService = userService;
  }

  @Get(':id')
  public async get(@Param('id', ParseIntPipe) id: number): Promise<GetChorisimoUserDto> {
    const userData = await this.#userService.getById(id);
    if (userData === null) {
      throw new NotFoundException('User not found. Please provide a valid Id');
    }
    return mapUserToGetUserDto(userData);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  public async post(@Body() dto: PostUserDto): Promise<GetChorisimoUserDto> {
    const user = mapPostUserDtoToUser(dto);
    const insertedUser = await this.#userService.insert(user);
    return mapUserToGetUserDto(insertedUser);
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const deleted = await this.#userService.deleteById(id);
    if (deleted === null) {
      throw new NotFoundException('User not found. Please provide a valid Id for deletion');
    }
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  public async patch(@Param('id', ParseIntPipe) id: number, @Body() dto: PatchUserDto): Promise<GetChorisimoUserDto> {
    const patched = await this.#userService.update(id, dto);
    if (patched === null) {
      throw new NotFoundException('User not found. Please provide a valid Id for patching');
    }
    if (typeof patched === 'symbol') {
      throw new BadRequestException('Please provide at least one property to patch');
    }
    return mapUserToGetUserDto(patched);
  }

}
