import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";

import {MyRoutes} from "~routes/routes";

import {slideIn} from "~app/shared/animations";
import {AboutPage} from "~home-page/pages/about/interfaces/about-page";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class AboutComponent {

  /**
   * The routes
   */
  public readonly RouteUrls = MyRoutes;

  /**
   * Title for the page.
   */
  public readonly title: string = "books I've read";

  /**
   * Information about the about page.
   */
  public readonly aboutPage: AboutPage;

  /**
   * Looping through the possible titles.
   */
  public plusIndex = 0;

  constructor(
    public route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {
    /**
     * Set the About page.
     */
    this.aboutPage = this.route.snapshot.data.aboutPage;

    /**
     * Change the "multiple-value" title automatically.
     */
    setInterval(() => {
      ++this.plusIndex;
      this.ref.markForCheck();
    }, 5000);
  }
}
