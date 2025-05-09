import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "~app/shared";

import {AboutComponent} from "./about.component";
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
    // CarouselModule,
    TextModule
  ],
  providers: [
    AboutPageResolver,
    AngularFirestore
  ]
})
export class AboutModule {
}
