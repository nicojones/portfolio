import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '~app/shared';

import { AboutComponent } from './about.component';
import { BooksService } from '~app/services';
import { CarouselModule } from '~app/modules/carousel';
import { AboutPageResolver } from '~home-page/pages/about/shared/resolvers/about-page.resolver';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        resolve: {
          aboutPage: AboutPageResolver
        }
      }
    ]),
    SharedModule,
    CarouselModule
  ],
  providers: [
    BooksService,
    AboutPageResolver
  ]
})
export class AboutModule {}
