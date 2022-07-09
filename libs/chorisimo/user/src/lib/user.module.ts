import { ChorisimoDatabaseModule } from '@chorisimo/data/database';
import { Module } from '@nestjs/common';
import { ChorisimoUserService } from './chorisimo-user.service';
import { ChorisimoUser } from './user.entity';

@Module({
  imports: [
    ChorisimoDatabaseModule.forEntity([ChorisimoUser])
  ],
  providers: [ChorisimoUserService],
  exports: [ChorisimoUserService],
})
export class ChorisimoUserModule {
}
