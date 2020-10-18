import { NgModule } from '@angular/core';
import { ContactMeComponent } from './contact-me.component';
import { SharedModule } from '~app/shared';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ContactMeComponent
      }
    ]),
    SharedModule
  ]
})
export class ContactMeModule {}
