import {FormControl} from "@angular/forms";
import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {RichTextConfig, richTextConfig} from "~app/modules/rich-text/rich-text.config";
import {FirestoreFile} from "~admin/types";

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
export class RichTextComponent implements OnInit {

  @Input()
  public control: FormControl<string>; // required

  @Input()
  public imageList: FirestoreFile[];

  public config: RichTextConfig;

  constructor() {
  }

  public ngOnInit() {
    this.config = richTextConfig(this.imageList);
  }

}
