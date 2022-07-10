import { CanActivate, ExceptionFilter, NestInterceptor, PipeTransform } from '@nestjs/common';

export interface AppBootstrapOptions {
  bootstrapModule: unknown;
  globalPrefix: string;
  globalPipes?: Array<PipeTransform>;
  globalGuards?: Array<CanActivate>;
  globalInterceptors?: Array<NestInterceptor>;
  globalFilters?: Array<ExceptionFilter>;
}
