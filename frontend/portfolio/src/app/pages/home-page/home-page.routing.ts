import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from '~home-page/home-page.component';
import { Routes } from '~routes/routes';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: Routes.ContactMe,
        loadChildren: () => import('~home-page/pages/contact-me').then((m) => m.ContactMeModule)
      },
      {
        path: Routes.About,
        loadChildren: () => import('~home-page/pages/about').then((m) => m.AboutModule)
      },
      {
        path: Routes.Work,
        loadChildren: () => import('~home-page/pages/my-work').then((m) => m.MyWorkModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]

})
export class HomePageRouting {}
