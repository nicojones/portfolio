import {Component, ElementRef, HostListener, Inject, OnDestroy, ViewChild} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

import {MyRoutes} from "~routes/routes";

import {getLocalStorage} from "~app/services";
import {slideIn} from "~app/shared/animations";
import {StorageKey} from "~app/shared/enums";
import {ClientOs, ProjectContent} from "~app/shared/interfaces";

import {addClass, removeClass} from "~app/functions";
import {AppService} from "~app/app.service";


@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss", "../../project-list.component.scss"],
  animations: [slideIn()]
})
export class ProjectComponent implements OnDestroy {

  /**
   * The routes object
   */
  public RouteUrls = MyRoutes;

  /**
   * The Project information.
   */
  public readonly project: ProjectContent;

  /**
   * The user's client.
   */
  public readonly client: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.CLIENT_OS);

  @ViewChild("appRow", {static: true})
  private appRow: ElementRef<HTMLDivElement>;

  public percentage = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    @Inject("Window") private readonly window: Window
  ) {
    /**
     * Get the project (read from the URL) from the list of projects.
     */
    this.project = this.route.snapshot.data.project;

    /**
     * If the project doesn't exist, show the ERROR page.
     */
    if (!this.project) {
      this.router.navigateByUrl("404", {skipLocationChange: true});
    }

    document.body.style.backgroundColor = this.project.bgColor;
    addClass(this.project.textColor, document.body);
    addClass("project-view", document.body);

    // After visiting this page, we don't want the projects to auto-load.
    AppService.projectSlideIn = false;
  }

  public ngOnDestroy() {
    document.body.style.backgroundColor = null;
    removeClass(this.project.textColor, document.body);
    removeClass("project-view", document.body);
  }

  /**
   * Sanitise the HTML.
   * @param project
   */
  public safeHTML(project: ProjectContent): SafeHtml {
    return (project._sanitized = this.sanitizer.bypassSecurityTrustHtml(project.content));
  }

  @HostListener("window:scroll", [])
  public onWindowScroll() {
    this.percentage = this.window.scrollY / (document.body.scrollHeight - this.window.innerHeight) * 100;
  }

}
