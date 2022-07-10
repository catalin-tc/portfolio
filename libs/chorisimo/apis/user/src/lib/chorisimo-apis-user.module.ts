import { Module } from '@nestjs/common';
import { ChorisimoApisUserController } from './chorisimo-apis-user.controller';

@Module({
  controllers: [ChorisimoApisUserController],
  providers: [],
  exports: [],
})
export class ChorisimoApisUserModule {}
