import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MyRoutes} from "~routes/routes";
import {AdminComponent} from "~admin/components/admin/admin.component";
import {AdminUploadImageComponent} from "~admin/components/upload-image/admin-upload-image.component";
import {FilesResolver} from "~admin/resolvers";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        resolve: {files: FilesResolver},
        children: [
          {
            path: "",
            component: AdminComponent
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
