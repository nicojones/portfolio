import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '~app/shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    MatSnackBarModule,
    ReactiveFormsModule
    // RouterModule
  ]
})
export class SharedModule {}
