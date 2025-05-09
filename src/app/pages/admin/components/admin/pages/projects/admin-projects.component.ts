import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { MainFormArray } from "~app/shared/classes";
import { ArticleGroup, FirebasePageEnum } from "~app/shared/enums";

import { AdminComponent } from "~app/pages/admin/components/admin/admin.component";
import { ProjectsPage } from "~app/pages/home-page/pages/projects/shared/interfaces";
import { MyRoutes } from "~routes/routes";


@Component({
  selector: "app-admin-projects",
  templateUrl: "./admin-projects.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminProjectsComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupProjectsForm();
  }

  public setupProjectsForm() {
    return this.getProjectPage(FirebasePageEnum.WORK, ArticleGroup.WORK)
      .subscribe((work: ProjectsPage) => {
        this.service.workForm.reset();
        this.service.workForm.patchValue(work);

        for (let i = 0, len = (work.projects || []).length; i < len; ++i) {
          (this.service.workForm.get("projects") as MainFormArray<ProjectsPage["projects"]>).push(
            this.service.projectContent(work.projects[i], i)
          );
        }
        this.currentTab = MyRoutes.PROJECTS;
      });
  }

  public saveProjectsForm() {
    const value: ProjectsPage = this.service.workForm.value;
    value.projects.sort((a, b) => a.index - b.index);
    this.save<ProjectsPage>(FirebasePageEnum.WORK, value);
  }

}
