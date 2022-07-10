import { NgModule } from '@angular/core';
import { ChorisimoAccessPortalModule } from '@chorisimo/ui/access-portal';

@NgModule({
  imports: [
    ChorisimoAccessPortalModule.config({
      containerBgSrc: 'assets/access-portal/access-portal-bg-img.jpg'
    })
  ]
})
export class AccessPortalLoaderModule {

}
