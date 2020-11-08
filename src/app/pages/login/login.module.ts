import { NgModule } from '@angular/core';
import { SharedModule } from '~app/shared';
import { LoginRouting } from '~login/login.routing';
import { LoginComponent } from '~login/components';
import { LoginService } from '~login/services';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    MatSnackBarModule,
    LoginRouting
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
