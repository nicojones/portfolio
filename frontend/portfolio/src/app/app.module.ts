import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '~app/shared';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { StarsComponent } from './components/stars/stars.component';
import { AppTitleService } from '~app/services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StarsComponent
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
export class AppModule { }
