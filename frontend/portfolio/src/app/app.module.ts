import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '~app/shared';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AppTitleService } from '~app/services';
import { NotFoundComponent } from '~app/components/not-found/not-found.component';

import { StarsComponent } from './components/stars/stars.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [
    AppTitleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
