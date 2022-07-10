import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ACCESS_PORTAL_SEGMENT = 'access-portal';

const routes: Routes = [
  {
    path: ACCESS_PORTAL_SEGMENT,
    loadChildren: () => import('./loaders/access-portal.loader').then(m => m.AccessPortalLoaderModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ACCESS_PORTAL_SEGMENT
  },
  {
    path: '**',
    redirectTo: ACCESS_PORTAL_SEGMENT
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
