import { NgModule } from '@angular/core';
import { SharedModule } from '~app/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';


@NgModule({
  imports: [

  ],
  exports: [
    SharedModule,
    BrowserAnimationsModule,
    RouterTestingModule
  ]
})
export class TestModule {}
