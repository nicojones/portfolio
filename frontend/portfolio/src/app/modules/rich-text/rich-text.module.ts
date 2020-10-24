import { NgModule } from '@angular/core';
import { SharedModule } from '~app/shared';
import { RichTextComponent } from '~app/modules/rich-text/rich-text.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { editor } from './library/ckeditor-library';


@NgModule({
  imports: [
    SharedModule,
    CKEditorModule
  ],
  declarations: [
    RichTextComponent
  ],
  exports: [
    RichTextComponent
  ]
})
export class RichTextModule {
  constructor () {
    window['CKEDITOR_BASEPATH'] = '//cdn.ckeditor.com/4.6.0/full/';
    editor();
  }
}
