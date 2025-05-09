import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { MainFormArray } from "~app/shared/classes";
import { ArticleGroup, FirebasePageEnum } from "~app/shared/enums";

import { AdminComponent } from "../../admin.component";
import { MyRoutes } from "~routes/routes";
import { ProjectsPage } from "~app/pages/home-page/pages/projects/shared/interfaces";


@Component({
  selector: "app-admin-blog",
  templateUrl: "./admin-blog.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminBlogComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupBlogForm();
  }


  public setupBlogForm() {
    return this.getProjectPage(FirebasePageEnum.BLOG, ArticleGroup.BLOG)
      .subscribe((blog: ProjectsPage) => {
        this.service.blogForm.reset();
        this.service.blogForm.patchValue(blog);

        for (let i = 0, len = (blog.projects || []).length; i < len; ++i) {
          (this.service.blogForm.get("projects") as MainFormArray<ProjectsPage["projects"]>).push(
            this.service.projectContent(blog.projects[i], i)
          );
        }
        this.currentTab = MyRoutes.BLOG;
      });
  }

  public saveBlogForm() {
    const value: ProjectsPage = this.service.blogForm.value;
    value.projects.sort((a, b) => a.index - b.index);
    this.save<ProjectsPage>(FirebasePageEnum.BLOG, value);
  }

}
