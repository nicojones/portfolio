import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Routes } from '~routes/routes';

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

  public Routes = Routes;

  public readonly project: ProjectContent;

  public readonly client: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.ClientOS);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    const projectUrl = this.route.snapshot.params.projectName;
    this.project = MyWorkResolver.myWork.projects.find((p: ProjectContent) => p.url === projectUrl);

    if (!this.project) {
      this.router.navigateByUrl('____', { skipLocationChange: true });
    }
  }

  public safeHTML (text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }

}
