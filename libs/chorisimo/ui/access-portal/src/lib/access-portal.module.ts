import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ChorisimoAccessPortalRoutingModule } from './access-portal-routing.module';
import { ChorisimoAccessPortalConfig } from './access-portal.config';
import { ChorisimoPageContainerComponent } from './page-container.component';
import { ChorisimoLoginPageComponent } from './pages/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    ChorisimoAccessPortalRoutingModule
  ],
  declarations: [
    ChorisimoPageContainerComponent,
    ChorisimoLoginPageComponent
  ],
})
export class ChorisimoAccessPortalModule {
  public static config(config: Partial<ChorisimoAccessPortalConfig>): ModuleWithProviders<ChorisimoAccessPortalModule> {
    return {
      ngModule: ChorisimoAccessPortalModule,
      providers: [
        {
          provide: ChorisimoAccessPortalConfig,
          useValue: new ChorisimoAccessPortalConfig(config)
        }
      ]
    };
  }
}
