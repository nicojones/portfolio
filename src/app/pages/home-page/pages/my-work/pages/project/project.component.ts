import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { RouteUrls } from '~routes/routes';

import { getLocalStorage } from '~app/services';
import { slideIn } from '~app/shared/animations';
import { StorageKey } from '~app/shared/enums';
import { ClientOs, ProjectContent } from '~app/shared/interfaces';

// import { addClass, removeClass } from '~app/functions/class-name.function';
import { MyWorkResolver } from '~home-page/pages/my-work/shared/resolvers';
import { addClass, removeClass } from '~app/functions';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', './../../my-work.component.scss'],
  animations: [slideIn()]
})
export class ProjectComponent implements OnDestroy {

  /**
   * The routes object
   */
  public RouteUrls = RouteUrls;

  /**
   * The Project information.
   */
  public readonly project: ProjectContent;

  /**
   * The user's client.
   */
  public readonly client: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.ClientOS);

  @ViewChild('appRow', { static: true })
  private appRow: ElementRef<HTMLDivElement>;

  public percentage = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    /**
     * Get the Project URL from the url
     */
    const projectUrl = this.route.snapshot.params.projectUrl;
    /**
     * Get the project (read from the URL) from the list of projects.
     */
    this.project = MyWorkResolver.myWork.projects.find((p: ProjectContent) => p.url === projectUrl);

    /**
     * If the project doesn't exist, show the ERROR page.
     */
    if (!this.project) {
      this.router.navigateByUrl('404', { skipLocationChange: true });
    }

    document.body.style.backgroundColor = this.project.bgColor;
    addClass(this.project.textColor, document.body);
    addClass('project-view', document.body);
  }

  public ngOnDestroy () {
    document.body.style.backgroundColor = null;
    removeClass(this.project.textColor, document.body);
    removeClass('project-view', document.body);
  }

  /**
   * Sanitise the HTML.
   * @param project
   */
  public safeHTML (project: ProjectContent): SafeHtml {
    return (project._sanitized = this.sanitizer.bypassSecurityTrustHtml(project.content));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  }

}
