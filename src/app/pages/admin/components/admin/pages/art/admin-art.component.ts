import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { MainFormArray } from "~app/shared/classes";
import { ArticleGroup, FirebasePageEnum } from "~app/shared/enums";

import { AdminComponent } from "../../admin.component";
import { MyRoutes } from "~routes/routes";
import { ProjectsPage } from "~app/pages/home-page/pages/projects/shared/interfaces";


@Component({
  selector: "app-admin-art",
  templateUrl: "./admin-art.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminArtComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupArtForm();
  }


  public setupArtForm() {
    return this.getProjectPage(FirebasePageEnum.ART, ArticleGroup.ART)
      .subscribe((art: ProjectsPage) => {
        this.service.artForm.reset();
        this.service.artForm.patchValue(art);

        for (let i = 0, len = (art.projects || []).length; i < len; ++i) {
          (this.service.artForm.get("projects") as MainFormArray<ProjectsPage["projects"]>).push(
            this.service.projectContent(art.projects[i], i)
          );
        }
        this.currentTab = MyRoutes.ART;
      });
  }

  public saveArtForm() {
    const value: ProjectsPage = this.service.artForm.value;
    value.projects.sort((a, b) => a.index - b.index);
    this.save<ProjectsPage>(FirebasePageEnum.ART, value);
  }

}
