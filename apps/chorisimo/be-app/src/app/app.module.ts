import { Module } from '@nestjs/common';
import { API_MODULES, SETUP_MODULES } from './imports';

@Module({
  imports: [
    ...SETUP_MODULES,
    ...API_MODULES
  ]
})
export class AppModule {
}
