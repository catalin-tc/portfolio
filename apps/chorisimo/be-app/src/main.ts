import { Logger } from '@nestjs/common';
import { appBootstrap } from '@portfolio/commons/bootstrap';
import { AppModule } from './app/app.module';
import { APP_BOOSTRAP_CONFIG_FACTORY, PORT } from './config';


(async function () {

  const app = await appBootstrap(APP_BOOSTRAP_CONFIG_FACTORY(AppModule));

  await app.listen(PORT);

  Logger.log(
    `🚀 Application is running on: ${await app.getUrl()}`
  );

})();
