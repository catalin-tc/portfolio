import { ChorisimoUserModule } from '@chorisimo/user';
import { Module } from '@nestjs/common';
import { ChorisimoApiUserController } from './api-user.controller';

@Module({
  imports: [
    ChorisimoUserModule
  ],
  controllers: [ChorisimoApiUserController],
})
export class ChorisimoApisUserModule {
}
