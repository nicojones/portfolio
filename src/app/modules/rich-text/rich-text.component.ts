import {FormControl} from "@angular/forms";
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {richTextConfig} from "~app/modules/rich-text/rich-text.config";

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
  selector: "app-rich-text",
  templateUrl: "rich-text.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["rich-text.component.scss"]
})
export class RichTextComponent {

  @Input()
  public control: FormControl<string>; // required

  public config = richTextConfig;

  constructor() {
  }

}
