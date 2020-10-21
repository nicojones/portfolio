import { NgModule } from '@angular/core';

import { HomePageComponent } from '~home-page/home-page.component';
import { SharedModule } from '~app/shared';
import { HomePageRouting } from '~home-page/home-page.routing';
import { HomePageResolver } from '~home-page/shared/resolvers';


@NgModule({
  imports: [
    SharedModule,
    HomePageRouting
  ],
  declarations: [
    HomePageComponent
  ],
  providers: [
    HomePageResolver
  ]

})
export class HomePageModule {}
