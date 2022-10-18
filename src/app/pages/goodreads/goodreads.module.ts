import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "~app/shared";
import {BooksService} from "~app/services";

import {GoodreadsComponent} from "~goodreads/goodreads.component";

import {CarouselModule} from "~app/modules/carousel";
import {ReadingBooksResolver} from "~app/shared/resolvers";
import {ReadBooksResolver} from "~app/shared/resolvers/read-books.resolver";


@NgModule({
  imports: [
    SharedModule,
    CarouselModule,
    RouterModule.forChild([
      {
        path: "",
        component: GoodreadsComponent,
        resolve: {
          reading: ReadingBooksResolver,
          read: ReadBooksResolver
        }
      }
    ])
  ],
  declarations: [
    GoodreadsComponent
  ],
  exports: [],
  providers: [
    BooksService,
    ReadingBooksResolver,
    ReadBooksResolver
  ]
})
export class GoodreadsModule {}
