import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '~app/shared/angular-material.module';


@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
  ]
})
export class SharedModule {}
