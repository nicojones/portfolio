import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


const materialModules: Type<unknown>[] = [
  MatButtonModule
];

@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class AngularMaterialModule {}
