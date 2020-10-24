import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectContent } from '~app/shared/interfaces';
import { MyWorkResolver } from '~home-page/pages/my-work/shared/resolvers';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', './../../my-work.component.scss']
})
export class ProjectComponent {

  public readonly project: ProjectContent;

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
