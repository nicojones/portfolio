import {NgModule} from "@angular/core";
import {SharedModule} from "~app/shared";
import {LoginRouting} from "~login/login.routing";
import {LoginComponent} from "~login/components";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    MatSnackBarModule,
    LoginRouting
  ],
  providers: []
})
export class LoginModule {
}
