import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '~app/shared';

import { AboutComponent } from './about.component';
import { BooksService } from '~app/services';
import { CarouselModule } from '~app/modules/carousel';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ]),
    SharedModule,
    CarouselModule
  ],
  providers: [
    BooksService
  ]
})
export class AboutModule {}
