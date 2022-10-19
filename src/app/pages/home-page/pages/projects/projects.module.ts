import {NgModule} from "@angular/core";
import {SharedModule} from "~app/shared";
import {RouterModule} from "@angular/router";
import {ProjectPageResolver, ProjectResolver} from "~home-page/pages/projects/shared/resolvers";
import {TextModule} from "~app/modules/text";
import {ProjectComponent} from "~home-page/pages/projects/pages/project";
import {ProjectListComponent} from "~home-page/pages/projects/pages/list";


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
          projectPage: ProjectPageResolver
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
    ProjectPageResolver,
    ProjectResolver
  ]
})
export class ProjectsModule {
}
