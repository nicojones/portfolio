import { NgModule } from '@angular/core';
import { MyWorkComponent } from './my-work.component';
import { SharedModule } from '~app/shared';
import { RouterModule } from '@angular/router';
import { MyWorkResolver } from '~home-page/pages/my-work/shared/resolvers';


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
    SharedModule
  ],
  providers: [
    MyWorkResolver
  ]
})
export class MyWorkModule { }
