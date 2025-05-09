import {ActivatedRoute} from "@angular/router";
import {ChangeDetectionStrategy, Component} from "@angular/core";

import {StorageKey} from "~app/shared/enums";
import {getLocalStorage} from "~app/services";
import {ClientOs} from "~app/shared/interfaces";
import {fadeIn, slideUnder} from "~app/shared/animations";

import {HomePage} from "~home-page/interfaces";
import {AppService} from "~app/app.service";


@Component({
  selector: "app-home",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideUnder(), fadeIn()]
})
export class HomePageComponent {

  /**
   * Info about the client's OS and browser.
   */
  public clientOs: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.CLIENT_OS);

  /**
   * Data for the home page
   */
  public homePage: HomePage = this.route.snapshot.data.homePage;

  /**
   * Getter for the static value (used in the view)
   */
  public get showMenu(): number {
    return AppService.showMenu$.value;
  }

  constructor(
    private route: ActivatedRoute
  ) {
  }

  public toggleMenu() {
    // Only for mobile devices... NOT for desktops.
    AppService.showMenu$.next(this.showMenu + 1);
  }
}
