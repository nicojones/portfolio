import { Component, Input, ViewEncapsulation } from "@angular/core";

import { MainFormGroup } from "~app/shared/classes";

import { AdminComponent } from "../../admin.component";


@Component({
  selector: "app-admin-helpers-text",
  templateUrl: "./admin-helpers-text.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminHelpersTextComponent extends AdminComponent {

  @Input()
  public form: MainFormGroup<any>;

}
