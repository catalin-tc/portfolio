import { Logger } from '@nestjs/common';
import { appBootstrap } from '@portfolio/commons/bootstrap';
import { APP_BOOSTRAP_CONFIG, PORT } from './config';


(async function () {

  const app = await appBootstrap(APP_BOOSTRAP_CONFIG);

  await app.listen(PORT);

  Logger.log(
    `🚀 Application is running on: ${await app.getUrl()}`
  );

})();
