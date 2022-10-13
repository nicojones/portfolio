import {NgModule} from "@angular/core";
import {SharedModule} from "~app/shared";
import {RichTextComponent} from "~app/modules/rich-text/rich-text.component";
import {EditorModule as TinyMCEModule} from "@tinymce/tinymce-angular";
import {getWindow} from "~app/functions/get-window.function";


@NgModule({
  imports: [
    SharedModule,
    TinyMCEModule
  ],
  declarations: [
    RichTextComponent
  ],
  exports: [
    RichTextComponent
  ]
})
export class RichTextModule {
  constructor() {
    getWindow();
  }
}
