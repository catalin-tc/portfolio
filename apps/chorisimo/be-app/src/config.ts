import { ChorisimoDBSetup } from '@chorisimo/setup/database';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { AppBootstrapOptions } from '@portfolio/commons/bootstrap';
import { getEnvironmentVariable } from '@portfolio/commons/environment';
import { join } from 'path';
import { environment } from './environments/environment';

export function APP_BOOSTRAP_CONFIG_FACTORY(
  bootstrapModule: unknown
): AppBootstrapOptions {
  return {
    bootstrapModule,
    globalPrefix: environment.globalApiPrefix,
  };
}

export const PORT = getEnvironmentVariable('PORT', '5300');

export const DATABASE_CONFIG: ChorisimoDBSetup = {
  url: getEnvironmentVariable(
    'DATABASE_URL',
    new Error('No database url provided')
  ),
  sync: environment.dbSync,
};

export const SERVE_STATIC_CONFIG: ServeStaticModuleOptions = {
  rootPath: join(__dirname, '..', 'fe-app'),
  exclude: [`/${environment.globalApiPrefix}*`],
  serveRoot: `/${environment.globalAppPrefix}`,
};
