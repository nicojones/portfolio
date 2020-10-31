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
import { LoginModule } from '~app/pages/login/login.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '~env/environment';


@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouting,
    LoginModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.baseHref },
    AppTitleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
