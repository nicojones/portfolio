import {NgModule} from "@angular/core";
import {SharedModule} from "~app/shared";
import {TextComponent} from "~app/modules/text/text.component";


@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TextComponent
  ]
})
export class TextModule { }
