import { AppBootstrapOptions } from '@portfolio/commons/bootstrap';
import { AppModule } from './app/app.module';

export const APP_BOOSTRAP_CONFIG: AppBootstrapOptions = {
  boostrapModule: AppModule,
  globalPrefix: 'api'
};

export const PORT = Number(process.env.PORT) ?? 5300;
