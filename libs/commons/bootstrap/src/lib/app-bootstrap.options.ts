import { CanActivate, ExceptionFilter, NestInterceptor, PipeTransform } from '@nestjs/common';

export interface AppBootstrapOptions {
  boostrapModule: unknown;
  globalPrefix: string;
  globalPipes?: Array<PipeTransform>;
  globalGuards?: Array<CanActivate>;
  globalInterceptors?: Array<NestInterceptor>;
  globalFilters?: Array<ExceptionFilter>;
}
