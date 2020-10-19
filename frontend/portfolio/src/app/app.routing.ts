import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '~routes/routes';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: Routes.Home,
        loadChildren: () => import('~home-page/home-page.module').then((m) => m.HomePageModule)
      },
      {
        path: Routes.Reading,
        loadChildren: () => import('~goodreads/goodreads.module').then((m) => m.GoodreadsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}
