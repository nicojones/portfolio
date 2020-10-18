import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodreadsResolver } from '~goodreads/shared/resolvers';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('~home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: 'goodreads',
    loadChildren: () => import('~goodreads/goodreads.module').then((m) => m.GoodreadsModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}
