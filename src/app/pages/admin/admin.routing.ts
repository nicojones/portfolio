import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MyRoutes } from "~routes/routes";
import { AdminComponent } from "~admin/components/admin/admin.component";
import { AdminUploadImageComponent } from "~admin/components/upload-image/admin-upload-image.component";
import { FilesResolver } from "~admin/resolvers";
import { AdminAboutComponent } from "./components/admin/pages/about/admin-about.component";
import { AdminProjectsComponent } from "./components/admin/pages/projects/admin-projects.component";
import { AdminLinksComponent } from "./components/admin/pages/links/admin-links.component";
import { AdminHomeComponent } from "./components/admin/pages/home/admin-home.component";
import { AdminArtComponent } from "./components/admin/pages/art/admin-art.component";
import { AdminBlogComponent } from "./components/admin/pages/blog/admin-blog.component";
import { AdminContactComponent } from "./components/admin/pages/contact/admin-contact.component";
import { AdminOnComponent } from "./components/admin/pages/on/admin-on.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        resolve: { files: FilesResolver },
        component: AdminComponent,
        children: [
          {
            path: MyRoutes.ABOUT,
            component: AdminAboutComponent
          },
          {
            path: MyRoutes.LINKS_DASHBOARD,
            component: AdminLinksComponent
          },
          {
            path: MyRoutes.HOME,
            component: AdminHomeComponent
          },
          {
            path: MyRoutes.CONTACT,
            component: AdminContactComponent
          },
          {
            path: MyRoutes.ART,
            component: AdminArtComponent
          },
          {
            path: MyRoutes.BLOG,
            component: AdminBlogComponent
          },
          {
            path: MyRoutes.PAGE_X,
            component: AdminOnComponent
          },
          {
            path: MyRoutes.PROJECTS,
            component: AdminProjectsComponent
          },
          {
            path: MyRoutes.UPLOAD_IMAGE,
            component: AdminUploadImageComponent
          }
        ]
      }
    ])
  ]
})
export class AdminRouting {
}
