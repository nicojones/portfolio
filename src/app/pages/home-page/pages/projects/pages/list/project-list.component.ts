import {ActivatedRoute} from "@angular/router";
import {AfterViewInit, ChangeDetectionStrategy, Component} from "@angular/core";

import {MyRoutes} from "~routes/routes";

import {slideIn} from "~app/shared/animations";

import {ProjectRoutingData, ProjectsPage} from "~home-page/pages/projects/shared/interfaces";
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
  public readonly RouteUrls = MyRoutes;

  /**
   * Info about the page.
   */
  public readonly routingData: ProjectRoutingData = this.route.snapshot.data as ProjectRoutingData;

  /**
   * Information about the page
   */
  public readonly projectPage: ProjectsPage = this.route.snapshot.data.projectPage as ProjectsPage;

  /**
   * We don't always want a .slide-in for the projects, not if we clicked on "back" from a project!
   */
  public readonly projectSlideIn: boolean = AppService.projectSlideIn;

  constructor(
    private route: ActivatedRoute
  ) {

    console.log(this.route.snapshot.data);
  }

  public ngAfterViewInit() {
    AppService.projectSlideIn = true;
  }

}
