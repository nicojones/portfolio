import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoodreadsComponent } from '~goodreads/goodreads.component';
import { GoodreadsResolver } from '~goodreads/shared/resolvers';
import { SharedModule } from '~app/shared';


@NgModule({
  imports: [
    SharedModule,
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
  providers: [
    GoodreadsResolver
  ]
})
export class GoodreadsModule {}
