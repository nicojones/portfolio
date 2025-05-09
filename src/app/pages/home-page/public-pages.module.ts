import {NgModule} from "@angular/core";

import {SharedModule} from "~app/shared";
import {PublicPagesRouting} from "~home-page/public-pages.routing";


@NgModule({
  imports: [
    SharedModule,
    PublicPagesRouting
  ],
  declarations: [],
  providers: []

})
export class PublicPagesModule {
}
