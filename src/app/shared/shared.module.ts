import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AngularMaterialModule} from "~app/shared/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ImageDirective} from "~app/shared/directives";
import {BackTitleComponent} from "~app/components/back-title/back-title.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ImageDirective,
    BackTitleComponent
  ],
  exports: [
    ImageDirective,
    BackTitleComponent,
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
