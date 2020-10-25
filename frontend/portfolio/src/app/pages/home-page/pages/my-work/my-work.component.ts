import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Routes } from '~routes/routes';

import { slideIn } from '~app/shared/animations';

import { MyWorkPage } from '~home-page/pages/my-work/shared/interfaces';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class MyWorkComponent {

  public readonly Routes = Routes;

  public readonly myWork: MyWorkPage;

  constructor (
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.myWork = this.route.snapshot.data.myWork;
  }

  public safeHTML (text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }

}
