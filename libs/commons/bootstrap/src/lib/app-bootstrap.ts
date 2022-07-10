import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppBootstrapOptions } from './app-bootstrap.options';

export async function appBootstrap(options: AppBootstrapOptions): Promise<INestApplication> {
  const app = await NestFactory.create(options.boostrapModule);

  app.setGlobalPrefix(options.globalPrefix);

  if (Array.isArray(options.globalPipes)) {
    app.useGlobalPipes(...options.globalPipes);
  }

  if (Array.isArray(options.globalGuards)) {
    app.useGlobalGuards(...options.globalGuards);
  }

  if (Array.isArray(options.globalInterceptors)) {
    app.useGlobalInterceptors(...options.globalInterceptors);
  }

  if (Array.isArray(options.globalFilters)) {
    app.useGlobalFilters(...options.globalFilters);
  }

  return app;

}
