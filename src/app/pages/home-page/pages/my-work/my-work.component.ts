import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouteUrls } from '~routes/routes';

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

  /**
   * The routes object.
   */
  public readonly RouteUrls = RouteUrls;

  /**
   * Info about the page.
   */
  public readonly myWork: MyWorkPage;

  constructor (
    private route: ActivatedRoute
  ) {
    /**
     * Set the information
     */
    this.myWork = this.route.snapshot.data.myWork;
  }

}
