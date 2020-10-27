import { NgModule } from '@angular/core';
import { SharedModule } from '~app/shared';
import { BookComponent } from '~app/modules/book/book.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    BookComponent
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule {}
