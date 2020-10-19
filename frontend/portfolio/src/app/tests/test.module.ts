import { NgModule } from '@angular/core';
import { SharedModule } from '~app/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
  imports: [

  ],
  exports: [
    SharedModule,
    BrowserAnimationsModule,
    RouterTestingModule,
    HttpClientTestingModule
  ]
})
export class TestModule {}
