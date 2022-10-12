import { UntypedFormControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

// function e2eControlName (control: FormControl): string {
//   let controlName: string = '';
//   Object.keys(control.parent.controls).forEach((name: string) => {
//     if (control === control.parent.controls[name]) {
//       controlName = name;
//     }
//   });
//   return controlName;
// }

@Component({
  selector: 'app-rich-text',
  templateUrl: 'rich-text.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['rich-text.component.scss']
})
export class RichTextComponent {

  @Input()
  public control: UntypedFormControl; // required

  public config;//: CKEDITOR.config;

  public readonly debounce: string = '500';

  constructor () {
    this.setConfig();
  }

  public change(value: string) {
    this.control.setValue(value, { emitEvent: false });
  }

  private setConfig() {
    this.config = {
      autoGrow_onStartup: true,
      autoGrow_minHeight: 800,
      resize_minHeight: 500,
      toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'others', groups: ['others'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'about', groups: ['about'] }
      ]
    };

    this.config.basicEntities = false;
    this.config.forcePasteAsPlainText = true;
    this.config.removeButtons = 'About,Flash,Table,Smiley,SpecialChar,PageBreak,Iframe,Language,Subscript,Superscript,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Scayt,Cut,Copy,PasteText,PasteFromWord,Paste,ExportPdf,Preview,Print,NewPage,Save,Templates,BidiLtr,BidiRtl,BGColor,TextColor';
  }
}
