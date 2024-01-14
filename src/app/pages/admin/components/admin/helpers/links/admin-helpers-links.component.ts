import { Component, Input, ViewEncapsulation } from "@angular/core";

import { MainFormGroup } from "~app/shared/classes";

import { AdminComponent } from "../../admin.component";


@Component({
  selector: "app-admin-helpers-links",
  templateUrl: "./admin-helpers-links.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminHelpersLinksComponent extends AdminComponent {

  @Input()
  public form: MainFormGroup<any>;

}
