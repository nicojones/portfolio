import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AngularMaterialModule} from "~app/shared/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ImageDirective} from "~app/shared/directives";
import {BackTitleComponent} from "~app/components/back-title/back-title.component";
import {RouterModule} from "@angular/router";
import {EnumToArrayPipe} from "~app/shared/pipes/enum-to-array.pipe";


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ImageDirective,
    BackTitleComponent,
    EnumToArrayPipe
  ],
  exports: [
    ImageDirective,
    BackTitleComponent,
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    EnumToArrayPipe
  ]
})
export class SharedModule {
}
