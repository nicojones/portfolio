import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { SharedModule } from '~app/shared';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ]),
    SharedModule
  ]
})
export class AboutModule {}
