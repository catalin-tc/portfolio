import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChorisimoPageContainerComponent } from './page-container.component';
import { ChorisimoLoginPageComponent } from './pages/login-page.component';

export const LOGIN_SEGMENT = 'login';
export const REGISTER_SEGMENT = 'register';

export const ACCESS_PORTAL_SEGMENTS = [LOGIN_SEGMENT, REGISTER_SEGMENT] as const;

export type AccessPortalSegment = typeof ACCESS_PORTAL_SEGMENTS[number];

const routes: Routes = [
  {
    path: '',
    component: ChorisimoPageContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: LOGIN_SEGMENT
      },
      {
        path: LOGIN_SEGMENT,
        component: ChorisimoLoginPageComponent
      },
      {
        path: REGISTER_SEGMENT,
        component: ChorisimoLoginPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChorisimoAccessPortalRoutingModule {

}
