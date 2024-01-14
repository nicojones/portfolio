import { Component, Input, ViewEncapsulation } from "@angular/core";

import { MainFormGroup } from "~app/shared/classes";

import { AdminComponent } from "../../admin.component";


@Component({
  selector: "app-admin-helpers-project",
  templateUrl: "./admin-helpers-project.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminHelpersProjectComponent extends AdminComponent {

  @Input()
  public form: MainFormGroup<any>;

}
