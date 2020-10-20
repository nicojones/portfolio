import { NgModule } from '@angular/core';
import { SharedModule } from '~app/shared';
import { LoginRouting } from '~login/login.routing';
import { LoginComponent } from '~login/components';
import { LoginService } from '~login/services';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRouting
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
