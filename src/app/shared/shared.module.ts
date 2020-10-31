import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '~app/shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageDirective } from '~app/shared/directives';


@NgModule({
  imports: [],
  declarations: [
    ImageDirective
  ],
  exports: [
    ImageDirective,
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
