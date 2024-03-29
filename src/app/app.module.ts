import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {SharedModule} from "~app/shared";
import {AppRouting} from "./app.routing";
import {AppComponent} from "./app.component";
import {AppTitleService} from "~app/services";
import {NotFoundComponent} from "~app/components/not-found/not-found.component";

import {StarsComponent} from "./components/stars/stars.component";
import {LoginModule} from "~app/pages/login/login.module";
import {environment} from "~env/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {getWindow} from "~app/functions/get-window.function";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouting,
    LoginModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    StarsComponent,
    NotFoundComponent
  ],
  providers: [
    {
      provide: "Window",
      useFactory: getWindow
    },
    AppTitleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
