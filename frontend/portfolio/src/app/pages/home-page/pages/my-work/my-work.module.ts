import { NgModule } from '@angular/core';
import { MyWorkComponent } from './my-work.component';
import { SharedModule } from '~app/shared';
import { RouterModule } from '@angular/router';
import { MyWorkResolver } from '~home-page/pages/my-work/shared/resolvers';
import { TextModule } from '~app/modules/text';
import { ProjectComponent } from '~home-page/pages/my-work/pages/project';


@NgModule({
  declarations: [
    MyWorkComponent,
    ProjectComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        resolve: {
          myWork: MyWorkResolver

        },
        children: [
          {
            path: '',
            component: MyWorkComponent
          },
          {
            path: ':projectName',
            component: ProjectComponent
          }
        ]
      }
    ]),
    SharedModule,
    TextModule
  ],
  providers: [
    MyWorkResolver
  ]
})
export class MyWorkModule {}
