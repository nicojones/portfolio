import { NgModule } from '@angular/core';
import { SharedModule } from '~app/shared';
import { CarouselComponent } from '~app/modules/carousel/carousel.component';
import { BookModule } from '~app/modules/book/book.module';


@NgModule({
  imports: [
    SharedModule,
    BookModule
  ],
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule {}
