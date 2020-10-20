import { NgModule } from '@angular/core';
import { MyWorkComponent } from './my-work.component';
import { SharedModule } from '~app/shared';
import { RouterModule } from '@angular/router';
import { MyWorkResolver } from '~home-page/pages/my-work/shared/resolvers';
import { TextModule } from '~app/modules/text';


@NgModule({
  declarations: [
    MyWorkComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyWorkComponent,
        resolve: {
          myWork: MyWorkResolver
        }
      }
    ]),
    SharedModule,
    TextModule
  ],
  providers: [
    MyWorkResolver
  ]
})
export class MyWorkModule { }
