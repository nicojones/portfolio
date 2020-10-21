import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from '~home-page/home-page.component';
import { Routes } from '~routes/routes';
import { HomePageResolver } from '~home-page/shared/resolvers';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
        resolve: {
          homePage: HomePageResolver
        }
      },
      {
        path: Routes.Contact,
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
