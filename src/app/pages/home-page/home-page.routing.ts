import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {HomePageComponent} from "~home-page/home-page.component";
import {Routes} from "~routes/routes";
import {HomePageResolver} from "~app/shared/resolvers";
import {FirebasePageEnum} from "~app/shared/enums";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: HomePageComponent,
        resolve: {
          homePage: HomePageResolver
        }
      },
      {
        path: Routes.CONTACT,
        loadChildren: () => import("~home-page/pages/contact-me").then((m) => m.ContactMeModule)
      },
      {
        path: Routes.ABOUT,
        loadChildren: () => import("~home-page/pages/about").then((m) => m.AboutModule)
      },
      {
        path: Routes.WORK,
        data: {page: FirebasePageEnum.WORK},
        loadChildren: () => import("~home-page/pages/my-work").then((m) => m.ProjectsModule)
      },
      {
        path: Routes.ART,
        data: {page: FirebasePageEnum.ART},
        loadChildren: () => import("~home-page/pages/my-work").then((m) => m.ProjectsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]

})
export class HomePageRouting {
}
