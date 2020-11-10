import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';

import { RouteUrls } from '~routes/routes';

import { slideIn } from '~app/shared/animations';

import { MyWorkPage } from '~home-page/pages/my-work/shared/interfaces';
import { AppService } from '~app/app.service';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class MyWorkComponent implements AfterViewInit {

  /**
   * The routes object.
   */
  public readonly RouteUrls = RouteUrls;

  /**
   * Info about the page.
   */
  public readonly myWork: MyWorkPage;

  /**
   * We don't always want a .slide-in for the projects, not if we clicked on "back" from a project!
   */
  public readonly projectSlideIn: boolean = AppService.projectSlideIn;

  constructor (
    private route: ActivatedRoute
  ) {
    /**
     * Set the information
     */
    this.myWork = this.route.snapshot.data.myWork;
  }

  public ngAfterViewInit () {
    AppService.projectSlideIn = true;
  }

}
