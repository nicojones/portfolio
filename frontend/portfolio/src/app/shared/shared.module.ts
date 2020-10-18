import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '~app/shared/angular-material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  exports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule {}
