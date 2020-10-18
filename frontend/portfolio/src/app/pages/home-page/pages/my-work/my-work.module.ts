import { NgModule } from '@angular/core';
import { MyWorkComponent } from './my-work.component';
import { SharedModule } from '~app/shared';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MyWorkComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyWorkComponent
      }
    ]),
    SharedModule
  ]
})
export class MyWorkModule { }
