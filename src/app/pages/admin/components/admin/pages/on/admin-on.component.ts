import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { MainFormArray } from "~app/shared/classes";
import { ArticleGroup, FirebasePageEnum } from "~app/shared/enums";

import { AdminComponent } from "../../admin.component";
import { MyRoutes } from "~routes/routes";
import { ProjectsPage } from "~app/pages/home-page/pages/projects/shared/interfaces";


@Component({
  selector: "app-admin-on",
  templateUrl: "./admin-on.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminOnComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupOnForm();
  }


  public setupOnForm() {
    return this.getProjectPage(FirebasePageEnum.PAGE_X, ArticleGroup.ON)
      .subscribe((on: ProjectsPage) => {
        this.service.onForm.reset();
        this.service.onForm.patchValue(on);

        for (let i = 0, len = (on.projects || []).length; i < len; ++i) {
          (this.service.onForm.get("projects") as MainFormArray<ProjectsPage["projects"]>).push(
            this.service.projectContent(on.projects[i], i)
          );
        }
        this.currentTab = MyRoutes.PAGE_X;
      });
  }

  public saveOnForm() {
    const value: ProjectsPage = this.service.onForm.value;
    value.projects.sort((a, b) => a.index - b.index);
    this.save<ProjectsPage>(FirebasePageEnum.PAGE_X, value);
  }

}
