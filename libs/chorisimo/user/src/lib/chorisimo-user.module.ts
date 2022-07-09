import { Module } from '@nestjs/common';
import { ChorisimoUserService } from './chorisimo-user.service';

@Module({
  providers: [ChorisimoUserService],
  exports: [ChorisimoUserService],
})
export class ChorisimoUserModule {}
