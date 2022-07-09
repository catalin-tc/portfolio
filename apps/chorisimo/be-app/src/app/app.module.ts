import { ChorisimoDatabaseModule } from '@chorisimo/data/database';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'fe-app'),
      exclude: ['/api*'],
      serveRoot: '/app'
    }),
    ChorisimoDatabaseModule.setup({
      url: process.env['DATABASE_URL']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
