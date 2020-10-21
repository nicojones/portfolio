import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '~app/shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [],
  exports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
    // RouterModule
  ]
})
export class SharedModule {}
