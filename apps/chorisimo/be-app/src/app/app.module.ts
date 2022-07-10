import { ChorisimoApisUserModule } from '@chorisimo/apis/user';
import { ChorisimoDatabaseModule } from '@chorisimo/data/database';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'fe-app'),
      exclude: ['/api*'],
      serveRoot: '/app'
    }),
    ChorisimoDatabaseModule.setup({
      url: process.env['DATABASE_URL'] as string,
      sync: true
    }),
    ChorisimoApisUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
