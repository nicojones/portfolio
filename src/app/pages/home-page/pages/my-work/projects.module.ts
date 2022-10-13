import {NgModule} from "@angular/core";
import {ProjectListComponent} from "./project-list.component";
import {SharedModule} from "~app/shared";
import {RouterModule} from "@angular/router";
import {ProjectListResolver, ProjectResolver} from "~home-page/pages/my-work/shared/resolvers";
import {TextModule} from "~app/modules/text";
import {ProjectComponent} from "~home-page/pages/my-work/pages/project";


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        resolve: {
          myWork: ProjectListResolver

        },
        children: [
          {
            path: "",
            component: ProjectListComponent
          },
          {
            path: ":projectUrl",
            component: ProjectComponent,
            resolve: {
              project: ProjectResolver
            }
          }
        ]
      }
    ]),
    SharedModule,
    TextModule
  ],
  providers: [
    ProjectListResolver,
    ProjectResolver
  ]
})
export class ProjectsModule {
}
