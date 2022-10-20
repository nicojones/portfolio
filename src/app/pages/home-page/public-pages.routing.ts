import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {MyRoutes} from "~routes/routes";
import {ArticleGroup, FirebasePageEnum} from "~app/shared/enums";
import {ProjectRoutingData} from "~home-page/pages/projects/shared/interfaces";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: MyRoutes.LINKS,
        loadChildren: () => import("~home-page/pages/links/links-page.module")
          .then((m) => m.LinksPageModule)
      },
      {
        path: MyRoutes.HOME,
        loadChildren: () => import("~home-page/pages/home/home-page.module")
          .then((m) => m.HomePageModule)
      },
      {
        path: MyRoutes.CONTACT,
        loadChildren: () => import("~home-page/pages/contact-me")
          .then((m) => m.ContactMeModule)
      },
      {
        path: MyRoutes.ABOUT,
        loadChildren: () => import("~home-page/pages/about")
          .then((m) => m.AboutModule)
      },
      {
        path: MyRoutes.WORK,
        data: {path: MyRoutes.WORK, page: FirebasePageEnum.WORK, article: ArticleGroup.WORK} as ProjectRoutingData,
        loadChildren: () => import("~home-page/pages/projects")
          .then((m) => m.ProjectsModule)
      },
      {
        path: MyRoutes.ART,
        data: {path: MyRoutes.ART, page: FirebasePageEnum.ART, article: ArticleGroup.ART} as ProjectRoutingData,
        loadChildren: () => import("~home-page/pages/projects")
          .then((m) => m.ProjectsModule)
      },
      {
        path: MyRoutes.BLOG,
        data: {path: MyRoutes.BLOG, page: FirebasePageEnum.BLOG, article: ArticleGroup.BLOG} as ProjectRoutingData,
        loadChildren: () => import("~home-page/pages/projects")
          .then((m) => m.ProjectsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]

})
export class PublicPagesRouting {
}
