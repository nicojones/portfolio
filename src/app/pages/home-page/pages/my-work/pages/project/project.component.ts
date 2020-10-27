import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { RouteUrls } from '~routes/routes';

import { getLocalStorage } from '~app/services';
import { slideIn } from '~app/shared/animations';
import { AnimationSelector, StorageKey } from '~app/shared/enums';
import { ClientOs, ProjectContent } from '~app/shared/interfaces';

import { MyWorkResolver } from '~home-page/pages/my-work/shared/resolvers';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', './../../my-work.component.scss'],
  animations: [slideIn(AnimationSelector.Text)]
})
export class ProjectComponent {

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
  }

  /**
   * Sanitise the HTML.
   * @param project
   */
  public safeHTML (project: ProjectContent): SafeHtml {
    return (project._sanitized = this.sanitizer.bypassSecurityTrustHtml(project.content));
  }

}
