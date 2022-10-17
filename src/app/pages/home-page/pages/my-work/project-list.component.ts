import {ActivatedRoute} from "@angular/router";
import {AfterViewInit, ChangeDetectionStrategy, Component} from "@angular/core";

import {RouteUrls} from "~routes/routes";

import {slideIn} from "~app/shared/animations";

import {ProjectsPage} from "~home-page/pages/my-work/shared/interfaces";
import {AppService} from "~app/app.service";


@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class ProjectListComponent implements AfterViewInit {

  /**
   * The routes object.
   */
  public readonly RouteUrls = RouteUrls;

  /**
   * Info about the page.
   */
  public readonly myWork: ProjectsPage;

  /**
   * We don't always want a .slide-in for the projects, not if we clicked on "back" from a project!
   */
  public readonly projectSlideIn: boolean = AppService.projectSlideIn;

  constructor(
    private route: ActivatedRoute
  ) {
    /**
     * Set the information
     */
    this.myWork = this.route.snapshot.data.myWork;
  }

  public ngAfterViewInit() {
    AppService.projectSlideIn = true;
  }

}
