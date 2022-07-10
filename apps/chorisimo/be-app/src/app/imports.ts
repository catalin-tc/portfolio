import { ChorisimoApisUserModule } from '@chorisimo/apis/user';
import { ChorisimoDatabaseModule } from '@chorisimo/setup/database';
import type { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DATABASE_CONFIG, SERVE_STATIC_CONFIG } from '../config';

type Imports = Exclude<
  Parameters<typeof Module>[0]['imports'],
  typeof undefined
>;

export const API_MODULES: Imports = [ChorisimoApisUserModule];

export const SETUP_MODULES: Imports = [
  ServeStaticModule.forRoot(SERVE_STATIC_CONFIG),
  ChorisimoDatabaseModule.setup(DATABASE_CONFIG),
];
