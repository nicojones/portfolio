import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoodreadsComponent } from '~goodreads/goodreads.component';
import { GoodreadsResolver } from '~goodreads/shared/resolvers';
import { CommonModule } from '@angular/common';
import { SharedModule } from '~app/shared';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: GoodreadsComponent,
        resolve: { books: GoodreadsResolver }
      }
    ]),
  ],
  declarations: [
    GoodreadsComponent
  ],
  providers: [
    GoodreadsResolver
  ]
})
export class GoodreadsModule {}
