import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '~app/shared';
import { BooksService } from '~app/services';

import { GoodreadsResolver } from '~goodreads/shared/resolvers';
import { GoodreadsComponent } from '~goodreads/goodreads.component';

import { CarouselModule } from '~app/modules/carousel';


@NgModule({
  imports: [
    SharedModule,
    CarouselModule,
    RouterModule.forChild([
      {
        path: '',
        component: GoodreadsComponent,
        resolve: { books: GoodreadsResolver }
      }
    ])
  ],
  declarations: [
    GoodreadsComponent
  ],
  exports: [],
  providers: [
    BooksService,
    GoodreadsResolver
  ]
})
export class GoodreadsModule {}
