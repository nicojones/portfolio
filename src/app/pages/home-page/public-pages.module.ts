import {NgModule} from "@angular/core";

import {SharedModule} from "~app/shared";
import {PublicPagesRouting} from "~home-page/public-pages.routing";
import {HomePageResolver, LinksPageResolver} from "~app/shared/resolvers";
import {HomePageComponent} from "~home-page/pages/home";
import {LinksPageComponent} from "~home-page/pages/links";


@NgModule({
  imports: [
    SharedModule,
    PublicPagesRouting
  ],
  declarations: [
    HomePageComponent,
    LinksPageComponent
  ],
  providers: [
    HomePageResolver,
    LinksPageResolver
  ]

})
export class PublicPagesModule {
}
