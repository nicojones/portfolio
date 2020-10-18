import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '~app/shared/angular-material.module';


@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    AngularMaterialModule
    // RouterModule
  ]
})
export class SharedModule {}
