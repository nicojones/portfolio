import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from '~home-page/home-page.component';
import { AngularMaterialModule } from '~app/shared/angular-material.module';
import { SharedModule } from '~app/shared';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      }
    ])
  ],
  declarations: [
    HomePageComponent
  ]

})
export class HomePageModule {}
