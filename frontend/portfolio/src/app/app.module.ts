import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '~app/shared';
import { AngularMaterialModule } from '~app/shared/angular-material.module';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { GoodreadsComponent } from './pages/goodreads/goodreads.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
