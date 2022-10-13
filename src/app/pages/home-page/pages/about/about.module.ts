import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "~app/shared";

import {AboutComponent} from "./about.component";
import {BooksService} from "~app/services";
import {CarouselModule} from "~app/modules/carousel";
import {AboutPageResolver} from "~home-page/pages/about/shared/resolvers/about-page.resolver";
import {TextModule} from "~app/modules/text";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AboutComponent,
        resolve: {
          aboutPage: AboutPageResolver
        }
      }
    ]),
    SharedModule,
    CarouselModule,
    TextModule
  ],
  providers: [
    BooksService,
    AboutPageResolver,
    AngularFirestore
  ]
})
export class AboutModule {
}
