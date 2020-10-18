import { NgModule } from '@angular/core';

import { HomePageComponent } from '~home-page/home-page.component';
import { SharedModule } from '~app/shared';
import { HomePageRouting } from '~home-page/home-page.routing';


@NgModule({
  imports: [
    SharedModule,
    HomePageRouting
  ],
  declarations: [
    HomePageComponent
  ]

})
export class HomePageModule {}
