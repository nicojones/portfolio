import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {MyRoutes} from "~routes/routes";
import {HomePageResolver, LinksPageResolver} from "~app/shared/resolvers";
import {FirebasePageEnum} from "~app/shared/enums";
import {HomePageComponent} from "~home-page/pages/home";
import {LinksPageComponent} from "~home-page/pages/links";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: LinksPageComponent,
        resolve: {
          linksPage: LinksPageResolver
        }
      },
      {
        path: "home",
        component: HomePageComponent,
        resolve: {
          homePage: HomePageResolver
        }
      },
      {
        path: MyRoutes.READING,
        loadChildren: () => import("~goodreads/goodreads.module").then((m) => m.GoodreadsModule)
      },
      {
        path: MyRoutes.CONTACT,
        loadChildren: () => import("~home-page/pages/contact-me").then((m) => m.ContactMeModule)
      },
      {
        path: MyRoutes.ABOUT,
        loadChildren: () => import("~home-page/pages/about").then((m) => m.AboutModule)
      },
      {
        path: MyRoutes.WORK,
        data: {page: FirebasePageEnum.WORK},
        loadChildren: () => import("~home-page/pages/my-work").then((m) => m.ProjectsModule)
      },
      {
        path: MyRoutes.ART,
        data: {page: FirebasePageEnum.ART},
        loadChildren: () => import("~home-page/pages/my-work").then((m) => m.ProjectsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]

})
export class PublicPagesRouting {
}
