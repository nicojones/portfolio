import { NgModule } from '@angular/core';
import { ContactMeComponent } from './contact-me.component';
import { SharedModule } from '~app/shared';
import { RouterModule } from '@angular/router';
import { ContactMeResolver } from '~home-page/pages/contact-me/shared/resolvers';


@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ContactMeComponent,
        resolve: {
          contactMe: ContactMeResolver
        }
      }
    ]),
    SharedModule
  ],
  providers: [
    ContactMeResolver
  ]
})
export class ContactMeModule {}
