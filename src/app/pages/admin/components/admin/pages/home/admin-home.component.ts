import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { MainFormArray } from "~app/shared/classes";
import { FirebasePageEnum } from "~app/shared/enums";

import { AdminComponent } from "../../admin.component";
import { HomePage } from "~app/pages/home-page/interfaces";
import { MyRoutes } from "~routes/routes";


@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminHomeComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupHomeForm();
  }

  public setupHomeForm() {
    return this.getSection<HomePage>(FirebasePageEnum.HOME).subscribe((home: HomePage) => {
      this.service.homeForm.reset();
      this.service.homeForm.patchValue(home);
      for (let i = 0, len = home.title.length; i < len; ++i) {
        (this.service.homeForm.get("title") as MainFormArray<HomePage["title"]>).push(
          this.service.homeFormTitle(home.title[i], i)
        );
      }
      this.currentTab = MyRoutes.HOME;
    });
  }



  public saveHomeForm() {
    const value: HomePage = this.service.homeForm.value;
    value.title.sort((a, b) => a.index - b.index);
    this.save<HomePage>(FirebasePageEnum.HOME, value);
  }
}
