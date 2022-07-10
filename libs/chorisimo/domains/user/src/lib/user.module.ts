import { ChorisimoDatabaseModule } from '@chorisimo/data/database';
import { Module } from '@nestjs/common';
import { ChorisimoUser } from './user.entity';
import { ChorisimoUserService } from './user.service';

@Module({
  imports: [ChorisimoDatabaseModule.forEntity([ChorisimoUser])],
  providers: [ChorisimoUserService],
  exports: [ChorisimoUserService],
})
export class ChorisimoUserModule {}
