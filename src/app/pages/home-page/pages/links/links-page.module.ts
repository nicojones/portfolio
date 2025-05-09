import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LinksPageResolver} from "~app/shared/resolvers";
import {LinksPageComponent} from "~home-page/pages/links/links-page.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: LinksPageComponent,
        resolve: {
          linksPage: LinksPageResolver
        }
      }
    ])
  ],
  providers: [
    LinksPageResolver
  ],
  declarations: [
    LinksPageComponent
  ]
})
export class LinksPageModule {
}
